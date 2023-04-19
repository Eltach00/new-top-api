import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
import { AuthService } from './auth.service';
import { ALREARE_REGISTERED_ERROR } from './auth.constants';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @UsePipes(new ValidationPipe())
  @Post('register')
  async register(@Body() dto: AuthDto) {
    const oldUser = await this.authService.findUser(dto.login);
    if (oldUser) {
      throw new BadRequestException(ALREARE_REGISTERED_ERROR);
    }
    return this.authService.createUser(dto);
  }

  @Get(':email')
  async getUser(@Param('email') email: string) {
    return this.authService.findUser(email);
  }

  @Get()
  async findAll() {
    return this.authService.findAll();
  }

  @Delete(':email')
  async delete(@Param('email') email: string) {
    return this.authService.delete(email);
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post('login')
  async login(@Body() { login, password }: AuthDto) {
    const user = await this.authService.validateUser(login, password);
    return this.authService.login(user.email);
  }
}
