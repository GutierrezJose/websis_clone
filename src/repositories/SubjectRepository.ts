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

    async getAllSubjects() {
        return await prisma.subject.findMany();
    }

    async getSubjectById(id: number) {
        return await prisma.subject.findUnique({
            where: { id_subject: id }
        })
    }

    async updateSubject(id: number, updateData: SubjectInterface) {
        return await prisma.subject.update({
            where: { id_subject: id },
            data: updateData
        })
    }
}
