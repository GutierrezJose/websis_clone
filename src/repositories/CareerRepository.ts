import type { CareerInterface } from '../interfaces/CareerInterface';
import type { CareerUpdateInterface } from '../interfaces/CareerUpdateInterface';
import { prisma } from '../utils/prismaclient';

export class CareerRepository {
    async createCareer(newCareer: CareerInterface) {
        return await prisma.career.create({
            data: {
                name: newCareer.name,
                id_faculty: newCareer.idFaculty
            }
        })
    }

    async findCareerByName(name: string) {
        return await prisma.career.findUnique({
            where: { name }
        })
    }

    async getCareers() {
        return await prisma.career.findMany();
    }

    async findCareerById(id: number) {
        return await prisma.career.findUnique({
            where: { id_career: id }
        })
    }

    async updateCareer(id: number, updateCareerData: CareerUpdateInterface) {
        const data: any = {};
        if (updateCareerData.name !== undefined) { data.name = updateCareerData.name };
        if (updateCareerData.idFaculty !== undefined) { data.id_faculty = updateCareerData.idFaculty }
        return await prisma.career.update({
            where: { id_career: id },
            data: data
        })
    }

    async deleteCareer(id: number) {
        return await prisma.career.delete({
            where: { id_career: id }
        })
    }
}