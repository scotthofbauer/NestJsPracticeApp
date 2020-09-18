import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { UserDTO } from './DTOs/UserDTO';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(UserRepository) private readonly UserRepository: UserRepository,
    ) {}

    createUser(userDTO: UserDTO){
        return this.UserRepository.createUser(userDTO);
    }
    updateUser(userDTO: UserDTO){
        return this.UserRepository.updateUser(userDTO);
    }
    findOneUser(id: number){
        return this.UserRepository.findOneUser(id);
    }
    removeUser(id: number){
        return this.UserRepository.removeUser(id);
    }
    findAllUsers(){
        return this.UserRepository.findAllUsers();
    }

}
