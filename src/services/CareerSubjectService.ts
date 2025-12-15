import { CareerSubjectDTO } from "../dto/CareerSubjectDTO";
import type { CareerSubjectInterface } from "../interfaces/CareerSubjectInterface";
import { CareerSubjectRepository } from "../repositories/CareerSubjectRepository";

export class CareerSubjectService {
    private careerSubjectRepository = new CareerSubjectRepository();

    async assignSubjectToCareer(assignmentData: CareerSubjectInterface) {
        if (await this.careerSubjectRepository.findSubjectAndCareerAssignment(assignmentData.idCareer, assignmentData.idSubject)) {
            throw new Error('The subject is already assigned to the specified career');
        } else {
            await this.careerSubjectRepository.AssignSubjectToCareer(assignmentData);
        }
    }

    async getAllCareersHavingSameSubject(idSubject: number) {
        const careers = await this.careerSubjectRepository.getAllCareersHavingSameSubject(idSubject);
        if (careers.length === 0) {
            throw new Error('No careers found for the specified subject');
        } else {
            const careersDTos: Array<CareerSubjectDTO> = [];
            for (const career of careers) {
                careersDTos.push(new CareerSubjectDTO(
                    career.id_career_subject,
                    career.id_career,
                    career.id_subject,
                    career.level,
                    career.elective,
                    career.prerequisite || undefined
                ))
            }
            return careersDTos;
        }
    }
}