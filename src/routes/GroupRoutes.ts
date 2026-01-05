import { Router } from "express";
import { GroupController } from "../controllers/GroupController";
import { adminMiddleware } from "../middlewares/adminMiddleware";

const groupRouter = Router();
const groupController = new GroupController();

groupRouter.post('/groups', (req, res) => groupController.createGroup(req, res));

export default groupRouter;