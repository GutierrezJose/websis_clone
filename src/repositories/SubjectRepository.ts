import type { SubjectInterface } from '../interfaces/SubjectInterface';
import { prisma } from '../utils/prismaclient';

export class SubjectRepository {
    async createSubject(newSubject: SubjectInterface) {
        return await prisma.subject.create({
            data: {
                name: newSubject.name
            }
        })
    }
}
