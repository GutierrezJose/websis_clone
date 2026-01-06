import { GroupDTO } from "../dto/GroupDTO";
import type { GroupInterface } from "../interfaces/GroupInterface";
import { GroupRepository } from "../repositories/GroupRepository";
export class GroupService {
    private groupRepository = new GroupRepository();

    async createGroup(groupData: GroupInterface) {
        const group = await this.groupRepository.createGroup(groupData);
        const groupDTO = new GroupDTO(group.id_group, group.id_career_subject ?? 0, group.group_name ?? '');
        return groupDTO;
    }

    async getAllGroups() {
        const groups = await this.groupRepository.getAllGroups();
        const groupsDTOs = groups.map(group => new GroupDTO(group.id_group, group.id_career_subject ?? 0, group.group_name ?? ''));
        return groupsDTOs;
    }

    async getGroupsByCareerSubject(idCareerSubject: number) {
        const groups = await this.groupRepository.getGroupsByCareerSubject(idCareerSubject);
        const groupsDTOs = groups.map(group => new GroupDTO(group.id_group, group.id_career_subject ?? 0, group.group_name ?? ''));
        return groupsDTOs;
    }

    async updateGroup(idGroup: number, groupName: string) {
        await this.groupRepository.updateGroup(idGroup, groupName);
    }

    async deleteGroup(idGroup: number) {
        const group = await this.groupRepository.findGroupById(idGroup);
        if (!group) {
            throw new Error('Group not found');
        } else {
            await this.groupRepository.deleteGroup(idGroup);
        }
    }

}