import { prisma } from '../utils/prismaclient';

export class UserRoleRepository {
    async getUsersWithRoles(): Promise<Array<{ id_user: number; name: string }>> {
        return await prisma.$queryRaw`SELECT id_user, r.name
                                      FROM user_rol ur
                                      JOIN rol r ON ur.id_rol = r.id_rol
                                      ORDER BY id_user
                                     `;      
    }

    async getUserRoles(userId: number): Promise<Array<string>> {
         const roles: Array<{name: string}> =  await prisma.$queryRaw`SELECT r.name
                                      FROM user_rol ur
                                      JOIN rol r ON ur.id_rol = r.id_rol
                                      WHERE id_user = ${userId}
                                      `;
        const roleNames: Array<string> = [];
        for (const role of roles) {
            roleNames.push(role.name);
        }
        return roleNames;
    }

    async assignRolesToUser(userId: number, role: number): Promise<void> {
            await prisma.user_rol.create({
                data: {
                    id_user: userId,
                    id_rol: role
                }
            })
    }

    async getUserRoleIds(userId: number): Promise<Array<number>> {
        const roles = []
        const userRoles = await prisma.user_rol.findMany({
            where: { id_user: userId},
            select: { id_rol: true }
        })
        for (const userRole of userRoles) {
            roles.push(userRole.id_rol);
        }
        return roles;
    }

    async removeRolesFromUser(userId: number, rolesIds: Array<number>): Promise<void> {
        for (const roleId of rolesIds) {
            await prisma.user_rol.deleteMany({
                where: {
                    id_user: userId,
                    id_rol: roleId
                }
            })
        }
    }
}