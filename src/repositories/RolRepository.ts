import {prisma} from '../utils/prismaclient';

export class RolRepository {
    async findRolNameById(id_rol:number) {
        const rol = await prisma.rol.findUnique({
            where: { id_rol},
            select: { name: true }
        })
        return rol?.name ?? null;
    }
}