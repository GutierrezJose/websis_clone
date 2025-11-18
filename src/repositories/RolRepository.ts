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
}