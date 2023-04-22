import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { TopPageDocument, TopPageModel } from './top-page.model';
import { Model } from 'mongoose';
import { CreateTopPageDto } from './dto/create-top-page.dto';
import { FindTopPageDto } from './dto/find-top-page.dto';
import { TopLevelCategory } from 'src/shared/interfaces/top-page.interface';

@Injectable()
export class TopPageService {
  constructor(
    @InjectModel(TopPageModel.name)
    private readonly topPageMdoel: Model<TopPageDocument>,
  ) {}

  async create(dto: CreateTopPageDto) {
    return this.topPageMdoel.create(dto);
  }

  async findById(id: string) {
    return this.topPageMdoel.findById(id).exec();
  }
  async findByAlias(alias: string) {
    return this.topPageMdoel.findOne({ alias }).exec();
  }

  async findAll() {
    return this.topPageMdoel.find().exec();
  }

  async findByCategory(firstCategory: TopLevelCategory) {
    return this.topPageMdoel
      .find({ firstCategory }, { alias: 1, secondCategory: 1, title: 1 })
      .exec();
  }

  async delete(id: string) {
    return this.topPageMdoel.findByIdAndDelete(id).exec();
  }

  async update(id: string, dto: CreateTopPageDto) {
    return this.topPageMdoel.findByIdAndUpdate(id, dto, { new: true }).exec();
  }
}
