import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument } from 'mongoose';
import {
  IProduct,
  IProductCharacteristic,
} from 'src/shared/interfaces/product.interface';

class ProductCharacteristic implements IProductCharacteristic {
  @Prop()
  name: string;
  @Prop()
  value: string;
}

export type ProductDocument = HydratedDocument<ProductModel>;

@Schema()
export class ProductModel implements IProduct {
  @Prop()
  title: string;

  @Prop()
  image: string;

  @Prop()
  price: number;

  @Prop()
  oldPrice: number;

  @Prop()
  credit: number;

  @Prop()
  calculatedRating: number;

  @Prop()
  description: string;

  @Prop()
  advantages: string;

  @Prop()
  disAdvantages: string;

  @Prop([String])
  categories: string[];
  @Prop([String])
  tags: string[];

  @Prop([ProductCharacteristic])
  characteristics: ProductCharacteristic[];
}

export const ProductSchema = SchemaFactory.createForClass(ProductModel);
