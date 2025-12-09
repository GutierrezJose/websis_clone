import { Router } from "express";
import { SubjectController } from "../controllers/SubjectController";

const router = Router();
const subjectController = new SubjectController();

router.post("/subjects", (req, res) => subjectController.createSubject(req, res));

export default router;