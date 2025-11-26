import { prisma } from '../utils/prismaclient';

export class UserRoleRepository {
    async getUsersWithRoles(): Promise<Array<{ id_user: number; name: string }>> {
        return await prisma.$queryRaw`SELECT id_user, r.name
                                      FROM user_rol ur
                                      JOIN rol r ON ur.id_rol = r.id_rol
                                      ORDER BY id_user
                                     `;      
    }
}