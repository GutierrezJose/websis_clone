import { Router } from "express";
import { StudentEnrollmentCareerController } from "../controllers/StudentEnrollmentCareerController";

const router = Router();
const studentEnrollmentCareerController = new StudentEnrollmentCareerController();

router.post('/students/enroll-career', (req, res) => studentEnrollmentCareerController.enrollStudentInCareer(req, res));
router.get('/students/:idStudent/enrolled-careers', (req, res) => studentEnrollmentCareerController.getCareersNamesEnrolledByStudent(req, res));
router.delete('/students/:idStudent/unenroll-career/:idCareer', (req, res) => studentEnrollmentCareerController.removeEnrollmentByStudentAndCareer(req, res));

export default router;