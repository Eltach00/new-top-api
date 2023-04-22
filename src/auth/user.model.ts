import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { IAuth } from 'src/shared/interfaces/auth.interface';

export type UserDocument = HydratedDocument<UserModel>;

@Schema()
export class UserModel implements IAuth {
  @Prop({ unique: true })
  email: string;

  @Prop()
  passwordHash: string;

  @Prop({ default: new Date() })
  creationDate: Date;
}

export const UserSchema = SchemaFactory.createForClass(UserModel);
