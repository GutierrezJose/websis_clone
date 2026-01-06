import type { Request, Response } from "express";
import { GroupService } from "../services/GroupService";
import type { GroupInterface } from "../interfaces/GroupInterface";

export class GroupController {
    private groupService = new GroupService();

    async createGroup(req: Request, res: Response) {
        try {
            const groupData: GroupInterface = req.body;
            const createdGroup = await this.groupService.createGroup(groupData);
            res.status(201).json(createdGroup);
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }

    async getAllGroups(_req: Request, res: Response) {
        try {
            const groups = await this.groupService.getAllGroups();
            res.status(200).json(groups);
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }

    async getGroupsByCareerSubject(req: Request, res: Response) {
        try {
            const idCareerSubject = Number(req.params.idCareerSubject);
            const groups = await this.groupService.getGroupsByCareerSubject(idCareerSubject);
            res.status(200).json(groups);
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }
}