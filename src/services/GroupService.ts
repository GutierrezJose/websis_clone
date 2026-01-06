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
}