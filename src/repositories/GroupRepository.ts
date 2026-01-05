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
}