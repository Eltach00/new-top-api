import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IAuth } from 'src/shared/interfaces/auth.interface';

@Schema()
export class UserModel extends Document implements IAuth {
  @Prop({ unique: true })
  email: string;

  @Prop()
  passwordHash: string;

  @Prop({ default: new Date() })
  creationDate: Date;
}

export const UserSchema = SchemaFactory.createForClass(UserModel);
