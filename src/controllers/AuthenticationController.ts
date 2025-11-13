import { AuthenticationService } from "../services/AuthenticationService";
import type { Request, Response } from "express";

export class AuthenticationController {
    private authService = new AuthenticationService();

    async authenticateUser(req: Request, res: Response) {
        const { username, password } = req.body;
        try {
            const authUser = await this.authService.authenticateUser(username, password);
            res.status(200).json(authUser);
        } catch (error: any) {
            res.status(401).json({ message: error.message });
        }
    }
}