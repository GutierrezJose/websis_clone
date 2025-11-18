import type { RoleInterface } from '../interfaces/RoleInterface';
import {prisma} from '../utils/prismaclient';

export class RolRepository {
    async findRolNameById(id_rol:number) {
        const rol = await prisma.rol.findUnique({
            where: { id_rol},
            select: { name: true }
        })
        return rol?.name ?? null;
    }

    async createRole(name: string) {
        const newRole = await prisma.rol.create({
            data: { name }
        })
        return newRole;
    }

    async getAllRoles() {
        const roles = await prisma.rol.findMany();
        return roles;
    }

    async findRoleByName(name: string) {
        name = name.trim().toLocaleLowerCase();
        const role = await prisma.rol.findUnique({
            where: { name }
        })
        return role;
    }

    async updateRole(idRol: number, data: RoleInterface) {
        await prisma.rol.update({
            where: { id_rol: idRol},
            data: {name: data.name}
        });
    }

    async findRoleById(idRol: number) {
        const role = await prisma.rol.findUnique({
            where: { id_rol: idRol }
        })
        return role;
    }

    async deleteRole(idRol: number) {
        await prisma.rol.delete({
            where: { id_rol: idRol }
        })
    }
}