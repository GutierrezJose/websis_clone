import type { Request, Response } from "express";
import { CareerService } from "../services/CareerService";
import type { CareerInterface } from "../interfaces/CareerInterface";
import type { CareerUpdateInterface } from "../interfaces/CareerUpdateInterface";

export class CareerController {
    private careerService = new CareerService();

    async createCareer(req: Request, res: Response) {
        try {
            const newCareer: CareerInterface = req.body;
            const createdCareer = await this.careerService.createCareer(newCareer);
            res.status(201).json(createdCareer);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }

    async getCareers(_req: Request, res: Response) {
        try {
            const careers = await this.careerService.getCareers();
            res.status(200).json(careers);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }

    async updateCareer(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            const updateCareerData: CareerUpdateInterface = req.body;
            await this.careerService.updateCareer(id, updateCareerData);
            res.status(200).json({ message: 'Career updated successfully' });
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }
}