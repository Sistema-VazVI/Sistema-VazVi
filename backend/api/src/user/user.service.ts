import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { Repository } from 'typeorm';
import { UserLoginDto } from './dtos/userLogin.dto';

@Injectable()
export class UserService {
    constructor( @InjectRepository(User) private readonly userRepository: Repository<User>){}
    

    async login(user: UserLoginDto): Promise<User>{
        
        const {username} = user;
        const findUser = await this.userRepository.findOne({username});

    }

}
