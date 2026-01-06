import { Router } from "express";
import { GroupController } from "../controllers/GroupController";

const router = Router();
const groupController = new GroupController();

router.post('/groups', (req, res) => groupController.createGroup(req, res));
router.get('/groups', (req, res) => groupController.getAllGroups(req, res));

export default router;