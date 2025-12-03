import { CareerDTO } from "../dto/CareerDTO";
import type { CareerInterface } from "../interfaces/CareerInterface";
import { CareerRepository } from "../repositories/CareerRepository";
import { FacultyRepository } from "../repositories/FacultyRepository";
import type { CareerUpdateInterface } from "../interfaces/CareerUpdateInterface";

export class CareerService {
    private careerRepository = new CareerRepository();
    private facultyRepository = new FacultyRepository();


    async createCareer(newCareer: CareerInterface) {
        const existingCareer = await this.careerRepository.findCareerByName(newCareer.name.trim())
        if (existingCareer) {
            throw new Error('Career already exists');
        }
        const faculty = await this.facultyRepository.findFacultyById(newCareer.idFaculty);
        if (!faculty) {
            throw new Error('Faculty not found');
        }

        const career = await this.careerRepository.createCareer(newCareer);
        const careerDTO = new CareerDTO(career.id_career, career.name ?? '', career.id_faculty);
        return careerDTO;
    }

    async getCareers() {
        const careers = await this.careerRepository.getCareers();
        const careerDTOs = careers.map(career => new CareerDTO(career.id_career, career.name ?? '', career.id_faculty));
        return careerDTOs;
    }

    async updateCareer(id: number, updateCareerData: CareerUpdateInterface) {
        const career = await this.careerRepository.findCareerById(id);
        if (!career) {
            throw new Error('Career not found');        
        }
        if (updateCareerData.idFaculty !== undefined && !(await this.facultyRepository.findFacultyById(updateCareerData.idFaculty))) {
            throw new Error('Faculty not found');
        }
        await this.careerRepository.updateCareer(id, updateCareerData);
    }

    async deleteCareer(id: number) {
        const career = await this.careerRepository.findCareerById(id);
        if (!career) {
            throw new Error('Career not found');
        } else {
            await this.careerRepository.deleteCareer(id);
        }
    }
}