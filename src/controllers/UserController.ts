import { UserService } from "../services/UserService";
import type { Request, Response } from "express";

export class UserController {
    private userService = new UserService();

    async getAllUsers(_req: Request, res: Response) {
        try {
        const users = await this.userService.getAllUsers();
        res.status(200).json(users);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }
}