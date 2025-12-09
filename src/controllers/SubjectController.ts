import { SubjectService } from "../services/SubjectService";
import type { SubjectInterface } from "../interfaces/SubjectInterface";
import type { Request, Response } from "express";

export class SubjectController {
    private subjectService = new SubjectService();

    async createSubject(req: Request, res: Response) {
        try {
            const subject: SubjectInterface = req.body;
            const newSubject = await this.subjectService.createSubject(subject);
            res.status(201).json(newSubject);
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }

    async getAllSubjects(_req: Request, res: Response) {
        try {
            const subjects = await this.subjectService.getAllSubjects();
            res.status(200).json(subjects);
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }
}