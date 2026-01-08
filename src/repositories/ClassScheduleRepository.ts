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
}