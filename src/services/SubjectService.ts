import { SubjectDTO } from "../dto/SubjectDTO";
import type { SubjectInterface } from "../interfaces/SubjectInterface";
import { SubjectRepository } from "../repositories/SubjectRepository";

export class SubjectService {
    private subjectRepository = new SubjectRepository();

    async createSubject(newSubject: SubjectInterface) {
        const subject = await this.subjectRepository.createSubject(newSubject);
        const subjectDTO = new SubjectDTO(subject.id_subject, subject.name);
        return subjectDTO;
    }
}