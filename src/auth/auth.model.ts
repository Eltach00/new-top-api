import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class AuthModel extends Document {
  @Prop({ unique: true })
  email: string;

  @Prop()
  passwordHash: number;
}

export const AuthSchema = SchemaFactory.createForClass(AuthModel);
