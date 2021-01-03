import { Controller, Post, Body, Get, Put, Delete,Param} from '@nestjs/common';

import { UsersService } from './users.service';
import { User } from './users.entity';
import { UserLoginDto } from './dto/login.dto';

@Controller('users')
export class UsersController {

    constructor(private service: UsersService) { }

    @Get()
    get(@Param() params) {
        return this.service.getUsers();
    }

    @Post()
    create(@Body() user: UserLoginDto) {
        return this.service.updateUser(user);
    }
    /*
    @Put()
    update(@Body() user: User) {
        return this.service.updateUser(user);
    }
    */

    @Delete(':id')
    deleteUser(@Param() params) {
        return this.service.deleteUser(params.id);
    }

}
