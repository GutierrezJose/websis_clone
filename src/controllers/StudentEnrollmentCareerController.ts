import type { Request, Response } from "express";
import { StudentCareerService } from "../services/StudentCareerService";
import type { StudentEnrollmentCareerInterface } from "../interfaces/StudentEnrollmentCareerInterface";

export class StudentEnrollmentCareerController{
    private studentCareerService = new StudentCareerService();

    async enrollStudentInCareer(req: Request, res: Response) {
        try {
            const studentEnrollment: StudentEnrollmentCareerInterface = req.body;
            await this.studentCareerService.enrollStudentInCareer(studentEnrollment);
            res.status(201).json({ message: 'Student enrolled in career successfully' });
        }  catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }
}