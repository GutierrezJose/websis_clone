import type { NextFunction, Request, Response } from "express";

export const adminMiddleware = (req: Request, res: Response, next: NextFunction) => {
    if(req.user?.roles.includes('admin')){
        return next();
    } else {
        return res.status(403).json({message: 'Access denied. Admins only.'});
    }
}