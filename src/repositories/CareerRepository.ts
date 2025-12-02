import type { CareerInterface } from '../interfaces/CareerInterface';
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
}