import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({ collection: 'user' })
export class User {
  @Prop({ type: mongoose.Schema.Types.String})
  full_name: string;

  @Prop({ type: mongoose.Schema.Types.String})
  username: string;

  @Prop({ type: mongoose.Schema.Types.String})
  email: string;

  @Prop({ type: mongoose.Schema.Types.String})
  mobile: string;

  @Prop({ type: mongoose.Schema.Types.String})
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User).set(
  'timestamps',
  true,
);
