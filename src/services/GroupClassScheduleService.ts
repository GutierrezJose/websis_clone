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
}