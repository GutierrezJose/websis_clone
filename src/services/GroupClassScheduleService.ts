import { GroupClassScheduleDTO } from "../dto/GroupCareerScheduleDTO";
import { GroupClassScheduleRepository } from "../repositories/GroupClassScheduleRepository";

export class GroupClassScheduleService {
    private groupClassScheduleRepository = new GroupClassScheduleRepository();

    async addScheduleToGroup(groupId: number, scheduleId: number) {
        const isAlreadyAdded = await this.groupClassScheduleRepository.findByGroupAndSchedule(groupId, scheduleId);
        if (isAlreadyAdded) {
            throw new Error("Schedule is already assigned to this group.");
        } else {
            await this.groupClassScheduleRepository.addSchedule(groupId, scheduleId);
        }
    }

    async getScheduleByGroup(idGroup: number) {
        const schedules = await this.groupClassScheduleRepository.getScheduleByGroup(idGroup);
        const scheduleDTOs = schedules.map(schedule => (new GroupClassScheduleDTO(schedule.id_group ?? 0, schedule.id_class_schedule ?? 0)));
        return scheduleDTOs;
    }
}