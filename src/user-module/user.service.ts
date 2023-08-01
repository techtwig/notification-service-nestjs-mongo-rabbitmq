import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {User, UserDocument} from './schemas/user.schema';
@Injectable()
export class UserService {
    @InjectModel(User.name)
    private readonly userDocument: Model<UserDocument>;

    async findOne(id: string) {
        return this.userDocument.findById(id);
    }
}
