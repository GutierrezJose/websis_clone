import { Router } from "express";
import { SubjectController } from "../controllers/SubjectController";

const router = Router();
const subjectController = new SubjectController();

router.post("/subjects", (req, res) => subjectController.createSubject(req, res));
router.get("/subjects", (req, res) => subjectController.getAllSubjects(req, res));
router.put("/subjects/:id", (req, res) => subjectController.updateSubject(req, res));

export default router;