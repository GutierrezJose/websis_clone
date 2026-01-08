export class ClassScheduleDTO {
    idClassSchedule: number;
    schedule: string;

    constructor(idClassSchedule: number, schedule: string) {
        this.idClassSchedule = idClassSchedule;
        this.schedule = schedule;
    }
}