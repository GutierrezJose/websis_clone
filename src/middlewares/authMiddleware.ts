import { verifyToken } from "../utils/Jwt";
import type { Request, Response, NextFunction, RequestHandler } from "express";
export const authMiddleware: RequestHandler = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    if( !authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({message: 'No token provided'});
    }

    const token = authHeader.substring(7);
    try {
        const payload: any  = verifyToken(token);
        req.user = {userId: payload.userId, roles: payload.roles};
        return next();
    } catch (error) {
        return res.status(401).json({message: 'Invalid token'});
    }
}