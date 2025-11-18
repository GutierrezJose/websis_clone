import { Router } from "express";
import { RoleController } from "../controllers/RoleController";

const router = Router();
const roleController = new RoleController();

router.post('/roles', (req, res) => roleController.createRole(req, res));
router.get('/roles', (req, res) => roleController.getAllRoles(req, res));
router.post('/roles/name', (req, res) => roleController.getRoleByName(req, res));
router.put('/roles/:idRol', (req, res) => roleController.updateRole(req, res));

export default router;