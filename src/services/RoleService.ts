import { RolRepository } from "../repositories/RolRepository";
import type { RoleInterface } from "../interfaces/RoleInterface";
import { RoleDTO } from "../dto/RoleDTO";

export class RoleService {
    private rolRepository = new RolRepository();

    async createRole(role: RoleInterface) {
        const newRole = await this.rolRepository.createRole(role.name);
        return new RoleDTO(newRole.id_rol, newRole.name);
    }

    async getAllRoles() {
        const roles = await this.rolRepository.getAllRoles();
        if (!roles) {
            return [];
        } else {
            const rolesDTO: RoleDTO[] = [];
            for (const role of roles) {
                rolesDTO.push(new RoleDTO(role.id_rol, role.name));
            }
            return rolesDTO;
        }
    }
}