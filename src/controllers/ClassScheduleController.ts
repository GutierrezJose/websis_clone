import type { Request, Response } from "express";
import { ClassScheduleService } from "../services/ClassScheduleService";
import type { ClassScheduleInterface } from "../interfaces/ClassScheduleInterface";

export class ClassScheduleController {
    private classScheduleService = new ClassScheduleService();

    async createClassSchedule(req: Request, res: Response) {
        try {
            const classScheduleData: ClassScheduleInterface = req.body;
            await this.classScheduleService.createClassSchedule(classScheduleData);
            res.status(201).json({ message: 'Class schedule created successfully' });
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }
}