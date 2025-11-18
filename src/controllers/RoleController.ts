import type { Request, Response } from "express";
import { RoleService } from "../services/RoleService";
import type { RoleInterface } from "../interfaces/RoleInterface";

export class RoleController {
    private roleService = new RoleService();

    async createRole(req: Request, res: Response) {
        try {
            const role: RoleInterface = req.body;
            const newRole = await this.roleService.createRole(role);
            res.status(201).json(newRole);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }

    async getAllRoles(_req: Request, res: Response) {
        try {
            const roles = await this.roleService.getAllRoles();
            res.status(200).json(roles);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }

    async getRoleByName(req: Request, res: Response) {
        try {
            const findedRole: RoleInterface = req.body;
            const role = await this.roleService.findRoleByName(findedRole.name);
            if (!role) {
                res.status(404).json({ message: "Role not found" });
            } else {
                res.status(200).json(role);
            }
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }

    async updateRole(req: Request, res: Response) {
        try {
            const idRol = Number(req.params.idRol);
            const data: RoleInterface = req.body;
            await this.roleService.updateRole(idRol, data);
            res.status(200).json({ message: "Role updated successfully" });
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }

    async deleteRole(req: Request, res: Response) {
        try {
            const idRol = Number(req.params.idRol);
            await this.roleService.deleteRole(idRol);
            res.status(200).json({ message: "Role deleted successfully" });
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }
}