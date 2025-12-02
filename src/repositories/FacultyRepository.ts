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

    async findFacultyById(idFaculty: number) {
        return await prisma.faculty.findUnique({
            where: { id_faculty: idFaculty}
        })
    }

    async updateFaculty(idFaculty: number, name: string) {
        await prisma.faculty.update({
            where: { id_faculty: idFaculty},
            data: { name: name}
        })
    }

    async deleteFaculty(idFaculty: number) {
        await prisma.faculty.delete({
            where :{ id_faculty: idFaculty}
        })
    }
}