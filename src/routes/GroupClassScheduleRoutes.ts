import { Router } from "express";
import { GroupClassScheduleController } from "../controllers/GroupClassScheduleController";

const router = Router();
const groupClassScheduleController = new GroupClassScheduleController();

router.post("/group-class-schedule", (req, res) => groupClassScheduleController.addScheduleToGroup(req, res));
router.get("/group-class-schedule/group/:groupId", (req, res) => groupClassScheduleController.getScheduleByGroup(req, res));

export default router;