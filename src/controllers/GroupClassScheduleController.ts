import type { Request, Response } from "express";
import { GroupClassScheduleService } from "../services/GroupClassScheduleService";

export class GroupClassScheduleController {
    private groupClassScheduleService = new GroupClassScheduleService();

    async addScheduleToGroup(req: Request, res: Response) {
        try {
            const { groupId, scheduleId } = req.body;
            await this.groupClassScheduleService.addScheduleToGroup(groupId, scheduleId);
            res.status(201).json({ message: "Schedule added to group successfully." });
        } catch (error: any) {
            res.status(500).json({ error: error.message } );
        }
    }

    async getScheduleByGroup(req: Request, res: Response) {
        try {
            const { groupId } = req.params;
            const schedules = await this.groupClassScheduleService.getScheduleByGroup(Number(groupId));
            res.status(200).json(schedules);
        } catch (error: any) {
            res.status(500).json({ error: error.message } );
        }
    }

    async getAllSchedulesAssygnedInSameClassSchedule(req: Request, res: Response) {
        try {
            const { scheduleId } = req.params;
            const schedules = await this.groupClassScheduleService.getAllSchedulesAssygnedInSameClassSchedule(Number(scheduleId));
            res.status(200).json(schedules);
        } catch (error: any) {
            res.status(500).json({ error: error.message } );
        }
    }
}