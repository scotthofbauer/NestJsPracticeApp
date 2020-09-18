import { Controller, Post, Body, Get, Delete } from '@nestjs/common';
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
    @Post(':id')
    updateUser(@Body() userDTO: UserDTO){
        return this.UserService.updateUser(userDTO);
    }
    @Get(':id')
    findOneuser(id: number){
        return this.UserService.findOneUser(id);
    }
    @Delete(':id')
    removeUser(id: number){
        return this.UserService.removeUser(id);
    }
    @Get()
    findAllUsers(){
        return this.UserService.findAllUsers();
    }


}
