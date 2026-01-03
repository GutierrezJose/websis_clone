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

    async getAllSubjectsAssignedToCareer(idCareer: number) {
        const subjects = await this.careerSubjectRepository.getAllSubjectsAssignedToCareer(idCareer);
        if (subjects.length === 0) {
            throw new Error('No subjects found for the specified career');
        } else {
            const subjectsDTos: Array<CareerSubjectDTO> = [];
            for (const subject of subjects) {
                subjectsDTos.push(new CareerSubjectDTO(subject.id_career_subject, subject.id_career, subject.id_subject, subject.level, subject.elective, subject.prerequisite || undefined))
            }
            return subjectsDTos;
        }
    }

    async deleteSubjectFromCareer(idCareer: number, idSubject: number) {
        const assigment = await this.careerSubjectRepository.findSubjectAndCareerAssignment(idCareer, idSubject);
        if (!assigment) {
            throw new Error('The subject is not assigned to the specified career');
        } else {
            await this.careerSubjectRepository.removeSubjectFromCareer(idCareer, idSubject);
        }
    }
}