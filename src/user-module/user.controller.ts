import {Controller, Get, Inject, Param,} from '@nestjs/common';
import {ApiTags} from '@nestjs/swagger';
import {UserService} from "./user.service";

@ApiTags('public/posts')
@Controller('posts')
export class PostController {
    @Inject()
    private readonly userService: UserService;

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.userService.findOne(id);
    }
}
