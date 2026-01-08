import { ClassScheduleDTO } from "../dto/ClassScheduleDTO";
import type { ClassScheduleInterface } from "../interfaces/ClassScheduleInterface";
import { ClassScheduleRepository } from "../repositories/ClassScheduleRepository";

export class ClassScheduleService {
    private classScheduleRepository = new ClassScheduleRepository();

    async createClassSchedule(classScheduleData: ClassScheduleInterface) {
        await this.classScheduleRepository.createClassSchedule(classScheduleData);
    }

    async getAllClassSchedules() {
        const schedules = await this.classScheduleRepository.getAllClassSchedules();
        const schedulesDTOs = schedules.map(schedule => (new ClassScheduleDTO(schedule.id_class_schedule, schedule.schedule ?? '')));
        return schedulesDTOs;
    }
}