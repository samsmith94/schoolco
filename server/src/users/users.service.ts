import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AutoMapper, InjectMapper } from 'nestjsx-automapper';
import { Repository } from 'typeorm';
import { UserLoginDto } from './dto/login.dto';
import { User } from './users.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private usersRepository: Repository<User>,
        @InjectMapper() private readonly mapper: AutoMapper
    ) { }

    async getUsers(): Promise<User[]> {
        return await this.usersRepository.find();
    }

    async updateUser(user: UserLoginDto): Promise<User> {
        const model = this.mapper.map(user, User);
        return await this.usersRepository.save(model);
    }

    async deleteUser(user: User) {
        this.usersRepository.delete(user);
    }
}
