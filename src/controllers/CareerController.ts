import type { Request, Response } from "express";
import { CareerService } from "../services/CareerService";
import type { CareerInterface } from "../interfaces/CareerInterface";

export class CareerController {
    private careerService = new CareerService();

    async createCareer(req: Request, res: Response) {
        try {
            const newCareer: CareerInterface = req.body;
            const createdCareer = await this.careerService.createCareer(newCareer);
            res.status(201).json(createdCareer);
        } catch (error) {
            res.status(400).json({ error: (error as Error).message });
        }
    }
}