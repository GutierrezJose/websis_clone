import { Router } from "express";
import { StudentEnrollmentCareerController } from "../controllers/StudentEnrollmentCareerController";

const router = Router();
const studentEnrollmentCareerController = new StudentEnrollmentCareerController();

router.post('/students/enroll-career', (req, res) => studentEnrollmentCareerController.enrollStudentInCareer(req, res));

export default router;