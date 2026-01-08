import { Router } from "express";
import { ClassScheduleController } from "../controllers/ClassScheduleController";

const router = Router();
const classScheduleController = new ClassScheduleController();

router.post('/class-schedules', (req, res) => classScheduleController.createClassSchedule(req, res));

export default router;