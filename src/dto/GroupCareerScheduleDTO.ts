export class GroupClassScheduleDTO {
    groupId: number;
    scheduleId: number;

    constructor(groupId: number, scheduleId: number) {
        this.groupId = groupId;
        this.scheduleId = scheduleId;
    }
}