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
}