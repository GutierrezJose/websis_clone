import { Router } from "express";
import { CareerSubjectController } from "../controllers/CareerSubjectController";

const router = Router();
const careerSubjectController = new CareerSubjectController();

router.post('/careers/assign-subject', (req, res) => careerSubjectController.assignSubjectToCareer(req, res));
router.get('/subject/:idSubject/careers', (req, res) => careerSubjectController.getAllCareersHavingSameSubject(req, res));
router.get('/career/:idCareer/subjects', (req, res) => careerSubjectController.getAllSubjectsAssignedToCareer(req, res));
export default router;