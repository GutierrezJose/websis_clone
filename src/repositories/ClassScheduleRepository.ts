import type { ClassScheduleInterface } from "../interfaces/ClassScheduleInterface";
import { prisma } from "../utils/prismaclient";

export class ClassScheduleRepository {
    async createClassSchedule(classScheduleData: ClassScheduleInterface) {
        return await prisma.class_schedule.create({
            data: {
                schedule: classScheduleData.schedule
            }
        })
    }
    
    async getAllClassSchedules() {
        return await prisma.class_schedule.findMany();
    }

    async updateClassSchedule(id: number, classScheduleData: ClassScheduleInterface) {
        return await prisma.class_schedule.update({
            where: { id_class_schedule: id },
            data: {
                schedule: classScheduleData.schedule
            }
        })
    }

    async getClassScheduleById(id: number) {
        return await prisma.class_schedule.findUnique({
            where: { id_class_schedule: id }
        })
    }

    async deleteClassSchedule(id: number) {
        return await prisma.class_schedule.delete({
            where: { id_class_schedule: id }
        })
    }
}