import type { user } from "../generated/prisma/client";
import { UserRepository } from "../repositories/UserRepository";
import { UserDTO } from "../dto/UserDTO";

export class UserService {
    private userRepository = new UserRepository();

    async getAllUsers() {
        const users: Array<user> = await this.userRepository.findUsers();
        const usersDTOs: Array<UserDTO> = users.map( (user) => {
            return new UserDTO(user.id_user, user.username, user.first_name ?? '', user.last_name ?? '', user.ci, user.birthdate ?? new Date(), user.address ?? '', user.phone ?? '');
        })
        return usersDTOs;
    }
}