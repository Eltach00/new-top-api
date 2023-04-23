import { Injectable } from '@nestjs/common';
import { path } from 'app-root-path';
import { format } from 'date-fns';
import { ensureDir, writeFile } from 'fs-extra';
import { FileElemResp } from './dto/file-resp-elem.dto';
import * as sharp from 'sharp';
import { MFile } from 'src/review/mfile';

@Injectable()
export class FilesService {
  async saveFiles(files: MFile[]): Promise<FileElemResp[]> {
    const dateFolder = format(new Date(), 'yyyy-MM-dd');
    const uploadFolder = `${path}/uploads/${dateFolder}`;
    await ensureDir(uploadFolder);
    const res: FileElemResp[] = [];
    for (const file of files) {
      await writeFile(`${uploadFolder}/${file.originalname}`, file.buffer);
      res.push({
        url: `${dateFolder}/${file.originalname}`,
        name: file.originalname,
      });
    }
    return res;
  }

  async convertToWebP(file: Buffer): Promise<Buffer> {
    return sharp(file).webp().toBuffer();
  }
}
