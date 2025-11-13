import { Router } from "express";
import { AuthenticationController } from "../controllers/AuthenticationController";

const router = Router();
const authController = new AuthenticationController();

router.post('/', (req, res) => authController.authenticateUser(req, res));

export default router;