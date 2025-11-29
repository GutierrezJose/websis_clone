import { prisma } from '../utils/prismaclient';

export class FacultyRepository {
    async createFaculty(name: string) {
        return await prisma.faculty.create({
            data: { name }
        })
    }

    async findFacultyByName(name: string) {
        return await prisma.faculty.findUnique({
            where: { name: name}
        })
    }    

    async getFaculties() {
        return await prisma.faculty.findMany();
    }
}