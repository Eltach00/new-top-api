import {
  Controller,
  HttpCode,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { FileElemResp } from './dto/file-resp-elem.dto';
import { FilesService } from './files.service';
import { MFile } from 'src/review/mfile';

@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}
  @Post('upload')
  @HttpCode(200)
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor('files'))
  async uploadFiles(
    @UploadedFile() file: Express.Multer.File,
  ): Promise<FileElemResp[]> {
    const saveArr: MFile[] = [];
    if (file.mimetype.includes('image')) {
      const webp = await this.filesService.convertToWebP(file.buffer);
      saveArr.push(
        new MFile({
          originalname: `${file.originalname.split('.')[0]}.webp`,
          buffer: webp,
        }),
      );
    } else {
      saveArr.push(new MFile(file));
    }
    return this.filesService.saveFiles(saveArr);
  }
}
