import { Router } from "express";
import { CareerController } from "../controllers/CareerController";

const router = Router();
const careerController = new CareerController();

router.post('/careers', (req, res) => careerController.createCareer(req, res));
router.get('/careers', (req, res) => careerController.getCareers(req, res));

export default router;