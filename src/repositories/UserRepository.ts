import type { user } from '../generated/prisma/client';
import type { UserInterface } from '../interfaces/UserInterface';
import { prisma } from '../utils/prismaclient';

export class UserRepository {
    async findUsers() {
        return await prisma.user.findMany();
    }

    async createUser(data: UserInterface) {
        const newUser: user = await prisma.user.create({
            data: {
                username: data.username,
                password: data.password,
                first_name: data.firstName,
                last_name: data.lastName,
                ci: data.ci,
                birthdate: data.birthdate,
                address: data.address,
                phone: data.phone,
            }
        })
        await prisma.user_rol.create({
            data: {
                id_user: newUser.id_user,
                id_rol: data.role
            }
        })
        return newUser;
    }
}
