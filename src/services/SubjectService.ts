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

    async getAllSubjects() {
        const subjects = await this.subjectRepository.getAllSubjects();
        const subjectDTOs = subjects.map(subject => new SubjectDTO(subject.id_subject, subject.name));
        return subjectDTOs;
    }

    async updateSubject(id: number, updateData: SubjectInterface) {
        if(await this.subjectRepository.getSubjectById(id)) {
            await this.subjectRepository.updateSubject(id, updateData);
        } else {
            throw new Error('Subject not found');
        }
    }

    async deleteSubject(id: number) {
        if(await this.subjectRepository.getSubjectById(id)) {
            await this.subjectRepository.deleteSubject(id);
        } else {
            throw new Error('Subject not found');
        }
    }
}