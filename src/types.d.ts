declare namespace Express {
    interface User {
        userId: number,
        roles: string[]
    }

    interface Request {
        user?: User
    }
}