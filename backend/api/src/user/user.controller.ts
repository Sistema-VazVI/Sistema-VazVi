import { BadRequestException, Body, Controller, Patch } from '@nestjs/common';
import { UserService } from './user.service';
import { UserLoginDto } from './dtos/userLogin.dto';
import { hash } from 'bcrypt';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService){}

    @Patch()
    async login (@Body() user:UserLoginDto): Promise<UserLoginDto>{
        
        return this.userService.login(user)

    }


}
