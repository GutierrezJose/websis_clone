import type { user } from "../generated/prisma/client";
import { UserRepository } from "../repositories/UserRepository";
import { UserDTO } from "../dto/UserDTO";
import type { UserInterface } from "../interfaces/UserInterface";
import bcrypt from 'bcryptjs';
import type { UserUpdateInterface } from "../interfaces/UserUpdateInterface";
import { RolRepository } from "../repositories/RolRepository";
import { UserRoleRepository } from "../repositories/UserRoleRepository";

export class UserService {
    private userRepository = new UserRepository();

    async getAllUsers() {
        const users: Array<user> = await this.userRepository.findUsers();
        const usersDTOs: Array<UserDTO> = users.map((user) => {
            return new UserDTO(user.id_user, user.username, user.first_name ?? '', user.last_name ?? '', user.ci, user.birthdate?.toISOString().split('T')[0] ?? '', user.address ?? '', user.phone ?? '');
        })
        return usersDTOs;
    }

    async createUser(user: UserInterface) {
        const rolRepository = new RolRepository();
        if (await this.userRepository.findUserByUsername(user.username) == null) {
            for (const role of user.role) {
                if(await rolRepository.findRoleById(role) == null) {
                    throw new Error(`Role with id ${role} does not exist`);
                }
            }
            const passwordHashed = await bcrypt.hashSync(user.password, 10);
            user.password = passwordHashed;
            const newUser = await this.userRepository.createUser(user);
            const birthDate = newUser.birthdate?.toISOString().split('T')[0];
            return new UserDTO(newUser.id_user, newUser.username, newUser.first_name ?? '', newUser.last_name ?? '', newUser.ci, birthDate ?? '', newUser.address ?? '', newUser.phone ?? '');
        } else {
            throw new Error('Username already exists');
        }
    }

    async updateUser(id: number, updateData: UserUpdateInterface) {
        if (this.userRepository.findUserById(id) != null) {
            await this.userRepository.updateUser(id, updateData);
        } else {
            throw new Error('User not found');
        }
    }

    async deleteUser(id: number) {
        if (this.userRepository.findUserById(id) != null) {
            await this.userRepository.deleteUser(id);
        } else {
            throw new Error('User not found');
        }
    }

    async getUsersWithRoles() {
        const userRoleRepository = new UserRoleRepository();
        const users = await userRoleRepository.getUsersWithRoles();
        return users;
    }

    async getUserRoles(userId: number) {
        const userRoleRepository = new UserRoleRepository();
        const userRoles = await userRoleRepository.getUserRoles(userId);
        return userRoles;
    }
}