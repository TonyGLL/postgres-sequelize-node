import { Request, Response } from 'express';
import { envelope } from '../helpers/envelop';
import { Handlers } from '../helpers/handlers';
import User, { IUser } from '../users/users.model';

import service from './auth.service';

class authController {
    public async login(req: Request, res: Response): Promise<void> {
        try {

        } catch (error) {

        }
    }
}

export default new authController();