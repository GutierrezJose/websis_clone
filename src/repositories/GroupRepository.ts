import type { GroupInterface } from '../interfaces/GroupInterface';
import { prisma } from '../utils/prismaclient';

export class GroupRepository {
    async createGroup(group: GroupInterface) {
        return await prisma.group.create({
            data: {
                id_career_subject: group.idCareerSubject,
                group_name: group.groupName
            }
        })
    }

    async getAllGroups() {
        return await prisma.group.findMany();
    }

    async getGroupsByCareerSubject(idCareerSubject: number) {
        return await prisma.group.findMany({
            where: { id_career_subject: idCareerSubject }
        })
    }

    async updateGroup(idGroup: number, groupName: string) {
        return await prisma.group.update({
            where: { id_group: idGroup },
            data: { group_name: groupName }
        })
    }

    async deleteGroup(idGroup: number) {
        return await prisma.group.delete({
            where: { id_group: idGroup }
        })
    }

    async findGroupById(idGroup: number) { 
        return await prisma.group.findUnique({
            where: { id_group: idGroup }
        })
    }
}