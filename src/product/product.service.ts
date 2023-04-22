import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ProductModel } from './product.model';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(ProductModel.name)
    private readonly productModel: Model<ProductModel>,
  ) {}

  async create(dto: CreateProductDto) {
    return this.productModel.create(dto);
  }

  async findById(id: string) {
    return this.productModel.findById(id).exec();
  }

  async findAll() {
    return this.productModel.find().exec();
  }

  async delete(id: string) {
    return this.productModel.deleteOne({ id }).exec();
  }

  async update(id: string, dto: CreateProductDto) {
    return this.productModel.findByIdAndUpdate(id, dto, { new: true }).exec();
  }
}
