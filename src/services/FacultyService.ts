import { FacultyRepository } from "../repositories/FacultyRepository";
import { FacultyDTO } from "../dto/FacultyDTO";

export class FacultyService {
    private facultyRepository = new FacultyRepository();

    async createFaculty(name: string) {
        if (await this.facultyRepository.findFacultyByName(name.trim().toUpperCase())) {
            throw new Error('Faculty already exists');
        } else {
            const faculty = await this.facultyRepository.createFaculty(name.trim().toUpperCase());
            const facultyDTO = new FacultyDTO(faculty.id_faculty, faculty.name);
            return facultyDTO;
        }
    }
}