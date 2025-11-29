import { FacultyController } from "../controllers/FacultyController";
import { Router } from "express";

const router = Router();
const facultyController = new FacultyController();

router.post('/faculties', (req, res) => facultyController.createFaculty(req, res));
router.get('/faculties', (req, res) => facultyController.getFaculties(req, res));
router.get('/faculties/:id', (req, res) => facultyController.getFacultyById(req, res));
router.put('/faculties/:id', (req, res) => facultyController.updateFaculty(req, res));

export default router;