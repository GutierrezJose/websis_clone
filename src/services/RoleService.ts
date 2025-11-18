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

    async findRoleByName(name: string) {
        const role = await this.rolRepository.findRoleByName(name);
        if (!role) {
            return null;
        } else {
            const roleDTO = new RoleDTO(role.id_rol, role.name);
            return roleDTO;
        }
    }

    async updateRole(idRol: number, data: RoleInterface) {
        const role = await this.rolRepository.findRoleById(idRol);
        if (!role) {
            throw new Error('Role not found');
        } else {
            data.name = data.name.trim().toLocaleLowerCase();
            await this.rolRepository.updateRole(idRol, data);
        }
    }
}