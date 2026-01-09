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

    async findByGroupAndSchedule(idGroup: number, scheduleId: number) {
        return await prisma.group_class_schedule.findFirst({
            where: {
                id_group: idGroup,
                id_class_schedule: scheduleId
            }
        });
    }

    async getScheduleByGroup(idGroup: number) {
        return await prisma.group_class_schedule.findMany({
            where: {
                id_group: idGroup
            }
        });
    }

    async getAllSchedulesAssygnedInSameClassSchedule(idSchedule: number) {
        return await prisma.group_class_schedule.findMany({
            where: {
                id_class_schedule: idSchedule
            }
        });
    }
}