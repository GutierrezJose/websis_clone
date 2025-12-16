import type { CareerSubjectInterface } from "../interfaces/CareerSubjectInterface";
import { prisma } from "../utils/prismaclient";

export class CareerSubjectRepository {
    async AssignSubjectToCareer(assignmentData: CareerSubjectInterface) {
        if (assignmentData.prerequisite !== undefined) {
            return await prisma.career_subject.create({
                data: {
                    id_career: assignmentData.idCareer,
                    id_subject: assignmentData.idSubject,
                    prerequisite: assignmentData.prerequisite,
                    level: assignmentData.level,
                    elective: assignmentData.elective
                }
            })
        } else {
            return await prisma.career_subject.create({
                data: {
                    id_career: assignmentData.idCareer,
                    id_subject: assignmentData.idSubject,
                    level: assignmentData.level,
                    elective: assignmentData.elective
                }
            })
        }
    }

    async findSubjectAndCareerAssignment(idCareer: number, idSubject: number) {
        return await prisma.career_subject.findFirst({
            where: {
                id_career: idCareer,
                id_subject: idSubject
            }
        })
    }

    async getAllCareersHavingSameSubject(idSubject: number) {
        return await prisma.career_subject.findMany({
            where: { id_subject: idSubject }
        })
    }

    async getAllSubjectsAssignedToCareer(idCareer: number) {
        return await prisma.career_subject.findMany({
            where: { id_career: idCareer },
            orderBy: { level: 'asc' }
        })
    }
}

