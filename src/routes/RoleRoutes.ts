import { Router } from "express";
import { RoleController } from "../controllers/RoleController";

const router = Router();
const roleController = new RoleController();

router.post('/roles', (req, res) => roleController.createRole(req, res));

export default router;