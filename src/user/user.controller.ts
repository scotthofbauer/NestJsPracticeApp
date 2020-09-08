import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDTO } from './DTOs/UserDTO';
@Controller('user')
export class UserController {

    constructor(
        private UserService : UserService,
      ) {}

    @Post()
    createUser(@Body() userDTO: UserDTO) {
        return this.UserService.createUser(userDTO)
    }
}
