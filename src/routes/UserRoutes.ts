import { UserController } from "../controllers/UserController";
import { Router } from "express";

 const router = Router();
 const userController = new UserController();
 
 router.get('/users', (req, res) => userController.getAllUsers(req, res));
 router.post('/users', (req, res) => userController.createUser(req, res));

 export default router;