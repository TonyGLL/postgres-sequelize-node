import { Router } from 'express';
import { usersRouter } from '../users/users.routes';
import { authRouter } from '../auth/auth.routes';

export const mainRouter = Router();

mainRouter
    .use('/auth', authRouter)
    .use('/users', usersRouter);