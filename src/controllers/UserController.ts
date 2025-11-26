import type { UserInterface } from "../interfaces/UserInterface";
import type { UserUpdateInterface } from "../interfaces/UserUpdateInterface";
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

    async createUser(req: Request, res: Response) {
        try {
            const userData: UserInterface = req.body;
            const birthDate = new Date(userData.birthdate);
            userData.birthdate = birthDate;
            const newUser = await this.userService.createUser(userData);
            res.status(201).json(newUser);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }

    async updateUser(req: Request, res: Response) {
        try {
            const userId: number = Number(req.params.id);
            const updateData: UserUpdateInterface = req.body;
            await this.userService.updateUser(userId, updateData);
            res.status(200).json({ message: 'User updated successfully' });
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }

    async deleteUser(req: Request, res: Response) {
        try {
            const userId = Number(req.params.id);
            await this.userService.deleteUser(userId);
            res.status(200).json({ message: 'User deleted successfully' });
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }

    async getUsersWithRoles(_req: Request, res: Response) {
        try {
            const usersWithRoles = await this.userService.getUsersWithRoles();
            res.status(200).json(usersWithRoles);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }
}