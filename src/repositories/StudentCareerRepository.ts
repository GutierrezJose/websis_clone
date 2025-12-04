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

    async findCareersNamesEnrolledByStudent(idStudent: number) {
        const careers: Array<{name: string}> = await prisma.$queryRaw`SELECT c."name"
                                        FROM student_enrollment_career se
                                        JOIN career c ON c.id_career = se.id_career
                                        WHERE se.id_user = ${idStudent}`;
        const careerNames: Array<string> = [];
        for (const career of careers) {
            careerNames.push(career.name);
        }
        return careerNames;
    }
}