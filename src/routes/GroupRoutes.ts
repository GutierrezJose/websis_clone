import { Router } from "express";
import { GroupController } from "../controllers/GroupController";

const router = Router();
const groupController = new GroupController();

router.post('/groups', (req, res) => groupController.createGroup(req, res));
router.get('/groups', (req, res) => groupController.getAllGroups(req, res));
router.get('/groups/career-subject/:idCareerSubject', (req, res) => groupController.getGroupsByCareerSubject(req, res));
router.put('/groups/:id', (req, res) => groupController.updateGroup(req, res));
router.delete('/groups/:id', (req, res) => groupController.deleteGroup(req, res));
export default router;