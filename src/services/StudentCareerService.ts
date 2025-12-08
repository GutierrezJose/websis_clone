import { StudentCareerRepository } from "../repositories/StudentEnrollmentCareerRepository";
import { CareerRepository } from "../repositories/CareerRepository";
import { UserRoleRepository } from "../repositories/UserRoleRepository";
import type { StudentEnrollmentCareerInterface } from "../interfaces/StudentEnrollmentCareerInterface";

export class StudentCareerService {
    private studentCareerRepository = new StudentCareerRepository();
    private careerRepository = new CareerRepository();
    private userRoleRepository = new UserRoleRepository();

    async enrollStudentInCareer(enrollmentStudent: StudentEnrollmentCareerInterface) {
        if (!await this.careerRepository.findCareerById(enrollmentStudent.idCareer)) {
            throw new Error('Career not found');
        }

        if (await this.userRoleRepository.getUserRoles(enrollmentStudent.idStudent).then(roles => roles.includes('student')) === false) {
            throw new Error('User is not a student');
        }

        if (await this.studentCareerRepository.findEnrollmentByStudentAndCareer(enrollmentStudent)) {
            throw new Error('Student already enrolled in this career');
        }
        await this.studentCareerRepository.enrollStudentInCareer(enrollmentStudent);
    }

    async getCareersNamesEnrolledByStudent(idStudent: number) {
        const isStudent = await this.userRoleRepository.getUserRoles(idStudent);
        if (!isStudent.includes('student')) {
            throw new Error('User is not a student');
        } else {
            const careers = await this.studentCareerRepository.findCareersNamesEnrolledByStudent(idStudent);
            if (careers.length > 0) {
                return { careers: careers };
            } else {
                throw new Error('No careers found for this student');
            }
        }
    }

    async removeEnrollmentByStudentAndCareer(enrollmentStudent: StudentEnrollmentCareerInterface) {
        const enrollment = await this.studentCareerRepository.findEnrollmentByStudentAndCareer(enrollmentStudent);
        if (!enrollment) {
            throw new Error('Enrollment not found for the given student and career');
        } else {
            await this.studentCareerRepository.removeEnrollmentByStudentAndCareer(enrollmentStudent);
        }
    }
}