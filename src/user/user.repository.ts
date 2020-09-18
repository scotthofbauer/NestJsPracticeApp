import { User }  from '../entity/user.entity';
import { EntityRepository, Repository } from 'typeorm';
import { UserDTO } from './DTOs/UserDTO';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  createUser = async (UserDTO: UserDTO) => {
    try{
      return await this.save(UserDTO);
    }
    catch(e){
      throw(e)
    }
  };
  updateUser = async (UserDTO: UserDTO) => {
    try{
      return await this.save({ ...UserDTO, id: Number(UserDTO.id) });
    }
    catch(e){
      throw(e)
    }
  };
  findOneUser = async (id: number) => {
    try{
      return this.findOneOrFail(id);
    }
    catch(e){
      throw(e)
    }
  };
  removeUser= async (id: number) => {
    try{      
      return this.delete(id);
    }
    catch(e){
      throw(e)
    }
  };
  findAllUsers = async () => {
    try{
      return this.find()
    }
    catch(e){
      throw(e)
    }
  }
}