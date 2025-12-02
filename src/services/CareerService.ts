import { CareerDTO } from "../dto/CareerDTO";
import type { CareerInterface } from "../interfaces/CareerInterface";
import { CareerRepository } from "../repositories/CareerRepository";
import { FacultyRepository } from "../repositories/FacultyRepository";

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
}