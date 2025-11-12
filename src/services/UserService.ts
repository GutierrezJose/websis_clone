import type { user } from "../generated/prisma/client";
import { UserRepository } from "../repositories/UserRepository";
import { UserDTO } from "../dto/UserDTO";
import type { UserInterface } from "../interfaces/UserInterface";
import bcrypt from 'bcryptjs';
export class UserService {
    private userRepository = new UserRepository();

    async getAllUsers() {
        const users: Array<user> = await this.userRepository.findUsers();
        const usersDTOs: Array<UserDTO> = users.map( (user) => {
            return new UserDTO(user.id_user, user.username, user.first_name ?? '', user.last_name ?? '', user.ci, user.birthdate?.toISOString().split('T')[0] ?? '', user.address ?? '', user.phone ?? '');
        })
        return usersDTOs;
    }

    async createUser(user: UserInterface) {
        const passwordHashed = await bcrypt.hashSync(user.password, 10);
        user.password = passwordHashed;
        const newUser = await this.userRepository.createUser(user);
        const birthDate = newUser.birthdate?.toISOString().split('T')[0];
        return new UserDTO(newUser.id_user, newUser.username, newUser.first_name ?? '', newUser.last_name ?? '', newUser.ci, birthDate ?? '', newUser.address ?? '', newUser.phone ?? '');
    }
}