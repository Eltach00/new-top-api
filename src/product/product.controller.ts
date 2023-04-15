import { Body, Controller, Post } from '@nestjs/common';

@Controller('product')
export class ProductController {
  @Post('create')
  async create() {}
}
