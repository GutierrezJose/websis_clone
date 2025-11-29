import type { Request, Response } from "express";
import { FacultyService } from "../services/FacultyService";

export class FacultyController {
    private facultyService = new FacultyService();

    async createFaculty(req: Request, res: Response) {
        try {
            const { name } = req.body;
            const newFaculty = await this.facultyService.createFaculty(name);
            res.status(201).json(newFaculty);
        } catch (error: any) {
            res.status(400).json({ message: error.message });
        }
    }

    async getFaculties(_req: Request, res: Response) {
        try {
            const faculties = await this.facultyService.getFaculties();
            res.status(200).json(faculties);
        } catch (error: any) {
            res.status(400).json({ message: error.message });
        }
    }

    async getFacultyById(req: Request, res: Response) {
        try {
            const facultyId = Number(req.params.id);
            const faculty = await this.facultyService.getFacultyById(facultyId);
            res.status(200).json(faculty);
        } catch (error: any) {
            res.status(400).json({ message: error.message });
        }
    }
}