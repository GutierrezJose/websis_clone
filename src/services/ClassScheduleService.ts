import type { ClassScheduleInterface } from "../interfaces/ClassScheduleInterface";
import { ClassScheduleRepository } from "../repositories/ClassScheduleRepository";

export class ClassScheduleService {
    private classScheduleRepository = new ClassScheduleRepository();

    async createClassSchedule(classScheduleData: ClassScheduleInterface) {
        await this.classScheduleRepository.createClassSchedule(classScheduleData);
    }
}