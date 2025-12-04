import type { StudentEnrollmentCareerInterface } from '../interfaces/StudentEnrollmentCareerInterface';
import { prisma } from '../utils/prismaclient';

export class StudentCareerRepository {
    async enrollStudentInCareer(enrollmentStudent: StudentEnrollmentCareerInterface) {
        return await prisma.student_enrollment_career.create({
            data: {
                id_user: enrollmentStudent.idStudent,
                id_career: enrollmentStudent.idCareer
            }
        })
    }

    async findEnrollmentByStudentAndCareer(enrollmentStudent: StudentEnrollmentCareerInterface) {
        return await prisma.student_enrollment_career.findFirst({
            where: {
                id_user: enrollmentStudent.idStudent,
                id_career: enrollmentStudent.idCareer
            }
        })
    }
}