import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  NotFoundException,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductService } from './product.service';
import { PRODUCT_NOT_FOUND } from './product.constants';
import { FindProductDto } from './dto/find-product.dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post('create')
  async create(@Body() dto: CreateProductDto) {
    return this.productService.create(dto);
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    const product = this.productService.findById(id);
    if (!product) {
      throw new NotFoundException(PRODUCT_NOT_FOUND);
    }
    return product;
  }

  @Delete(':id')
  async deleteById(@Param('id') id: string) {
    const product = this.productService.findById(id);
    if (!product) {
      throw new NotFoundException(PRODUCT_NOT_FOUND);
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, dto: CreateProductDto) {
    const updatedProduct = this.productService.update(id, dto);
    if (!updatedProduct) {
      throw new NotFoundException(PRODUCT_NOT_FOUND);
    }
    return updatedProduct;
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post('find')
  async find(@Body() dto: FindProductDto) {
    return this.productService.findWithReviews(dto);
  }
}
