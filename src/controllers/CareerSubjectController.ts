import type { Request, Response } from "express";
import { CareerSubjectService } from "../services/CareerSubjectService";
import type { CareerSubjectInterface } from "../interfaces/CareerSubjectInterface";

export class CareerSubjectController {
    private careerSubjectService = new CareerSubjectService();

    async assignSubjectToCareer(req: Request, res: Response) {
        try {
            const assigmentData: CareerSubjectInterface = req.body;
            await this.careerSubjectService.assignSubjectToCareer(assigmentData);
            res.status(200).json({ message: 'Subject assigned to career successfully' });
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }
}