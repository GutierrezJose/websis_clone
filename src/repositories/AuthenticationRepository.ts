import { prisma } from '../utils/prismaclient';

export class AuthenticationRepository {
    async findUserByUsername(username: string) {
        const user = await prisma.user.findUnique({
            where: { username }
        })
        if (user) {
            const userRoles = await prisma.user_rol.findMany({
                where: { id_user: user?.id_user }
            })
            return { userData: user, roles: userRoles };
        } else {
            return null;
        }
    }
}