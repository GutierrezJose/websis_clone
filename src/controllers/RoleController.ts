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
}