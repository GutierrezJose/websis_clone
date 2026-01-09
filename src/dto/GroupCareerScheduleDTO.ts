export class GroupClassScheduleDTO {
    groupClassScheduleId: number;
    groupId: number;
    scheduleId: number;

    constructor(groupClassScheduleId: number, groupId: number, scheduleId: number) {
        this.groupClassScheduleId = groupClassScheduleId;
        this.groupId = groupId;
        this.scheduleId = scheduleId;
    }
}