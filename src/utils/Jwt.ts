import jwt from 'jsonwebtoken';
import 'dotenv/config'
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = '1h';

export function generateToken(payload: object): string {
    return jwt.sign(payload, JWT_SECRET as string, {expiresIn: JWT_EXPIRES_IN});
}

export function verifyToken(token: string) {
    return jwt.verify(token, JWT_SECRET as string);
}