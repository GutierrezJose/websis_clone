import { prisma } from '../utils/prismaclient';

export class UserRepository {
    async findUsers() {
        return await prisma.user.findMany();
    }
}