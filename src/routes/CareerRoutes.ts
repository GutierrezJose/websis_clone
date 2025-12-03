import { Router } from "express";
import { CareerController } from "../controllers/CareerController";

const router = Router();
const careerController = new CareerController();

router.post('/careers', (req, res) => careerController.createCareer(req, res));
router.get('/careers', (req, res) => careerController.getCareers(req, res));
router.put('/careers/:id', (req, res) => careerController.updateCareer(req, res));
router.delete('/careers/:id', (req, res) => careerController.deleteCareer(req, res));

export default router;