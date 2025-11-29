import { FacultyController } from "../controllers/FacultyController";
import { Router } from "express";

const router = Router();
const facultyController = new FacultyController();

router.post('/faculties', (req, res) => facultyController.createFaculty(req, res));
router.get('/faculties', (req, res) => facultyController.getFaculties(req, res));

export default router;