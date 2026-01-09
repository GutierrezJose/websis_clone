import {prisma} from '../utils/prismaclient';

export class GroupClassScheduleRepository {
    async addSchedule(groupId: number, scheduleId: number) {
        return await prisma.group_class_schedule.create({
            data: {
                id_group: groupId,
                id_class_schedule: scheduleId
            }
        })
    }

    async findByGroupAndSchedule(groupId: number, scheduleId: number) {
        return await prisma.group_class_schedule.findFirst({
            where: {
                id_group: groupId,
                id_class_schedule: scheduleId
            }
        });
    }
}