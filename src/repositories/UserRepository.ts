import type { user } from '../generated/prisma/client';
import type { UserInterface } from '../interfaces/UserInterface';
import type { UserUpdateInterface } from '../interfaces/UserUpdateInterface';
import { prisma } from '../utils/prismaclient';
import { mapUpdateDataToPrisma } from '../utils/updateUserUtil';

export class UserRepository {
    async findUsers() {
        return await prisma.user.findMany();
    }

    async createUser(data: UserInterface) {
        const roles: number[] = data.role;
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
        for (const role of roles) {
            await prisma.user_rol.create({
                data: {
                    id_user: newUser.id_user,
                    id_rol: role
                }
            })
        }
        return newUser;
    }

    async findUserById(id: number) {
        return await prisma.user.findUnique({
            where: { id_user: id }
        })
    }

    async updateUser(id: number, updateData: UserUpdateInterface) {
        const data = mapUpdateDataToPrisma(updateData);
        return await prisma.user.update({
            where: { id_user: id},
            data : data
        })
    }

    async deleteUser(id: number) {
        await prisma.user_rol.deleteMany({
            where: {id_user: id}
        })

        return await prisma.user.delete({
            where: { id_user: id }
        })
    }
}
