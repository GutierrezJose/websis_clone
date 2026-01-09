import { Router } from "express";
import { ClassScheduleController } from "../controllers/ClassScheduleController";

const router = Router();
const classScheduleController = new ClassScheduleController();

router.post('/class-schedules', (req, res) => classScheduleController.createClassSchedule(req, res));
router.get('/class-schedules', (req, res) => classScheduleController.getAllClassSchedules(req, res));
router.put('/class-schedules/:id', (req, res) => classScheduleController.updateClassSchedule(req, res));
router.delete('/class-schedules/:id', (req, res) => classScheduleController.deleteClassSchedule(req, res));

export default router;