import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import handler from '../handlers/request.handler';
const secret: verifyData['secret'] = process.env.SECRET;

interface verifyData {
    token: string | string[] | undefined;
    secret: string | undefined;
}

class JSONWebToken {
    public async verifyToken(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const token: verifyData['token'] = (req.headers.authorization) ? (req.headers.authorization).replace('Bearer ', '') : undefined;
            if (token && secret) {
                const isValid: boolean = JSONWebToken.verifyJWT({ token, secret });
                if (isValid) return next();
            }
            throw new Error('401');
        } catch (error: any) {
            handler(res, error.message, { message: 'Unnauthorized' });
        }
    }

    private static verifyJWT(verifyData: verifyData): boolean {
        try {
            verify(String(verifyData.token), String(verifyData.secret));
            return true;
        } catch (error) {
            return false;
        }
    }
}

export default new JSONWebToken().verifyToken;