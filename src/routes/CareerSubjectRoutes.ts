import { Router } from "express";
import { CareerSubjectController } from "../controllers/CareerSubjectController";

const router = Router();
const careerSubjectController = new CareerSubjectController();

router.post('/careers/assign-subject', (req, res) => careerSubjectController.assignSubjectToCareer(req, res));

export default router;