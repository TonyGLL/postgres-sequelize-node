import { Request, Response } from 'express';
import { envelope } from '../helpers/envelop';
import { Handlers } from '../helpers/handlers';
import { IUser } from './users.model';

import service from './users.service';

class usersController {
    public async getUsers(req: Request, res: Response): Promise<void> {
        try {
            let usersService: any = '';
            let queryParams = req.query;
            usersService = await service.getUsers(queryParams);
            const resData: any = Handlers.dataHandler(usersService[1], usersService[0]);
            res.status(resData.code).json(envelope(resData.data));
        } catch (error) {
            const resError = Handlers.errorHandler(error, 'BAD_REQUEST');
            res.status(resError.code).json(envelope(resError.data));
        }
    }

    public async getUserById(req: Request, res: Response): Promise<void> {
        try {
            let usersService: any = '';
            let id: string = req.params.id;
            usersService = await service.getUserById(id);
            const resData: any = Handlers.dataHandler(usersService[1], usersService[0]);
            res.status(resData.code).json(envelope(resData.data));
        } catch (error) {
            const resError = Handlers.errorHandler(error, 'BAD_REQUEST');
            res.status(resError.code).json(envelope(resError.data));
        }
    }

    public async createUser(req: Request, res: Response): Promise<void> {
        try {
            let usersService: any = '';
            let user: IUser = req.body;
            usersService = await service.createUser(user);
            const resData: any = Handlers.dataHandler(usersService[1], usersService[0]);
            res.status(resData.code).json(envelope(resData.data));
        } catch (error) {
            console.log(error)
            const resError = Handlers.errorHandler(error, 'BAD_REQUEST');
            res.status(resError.code).json(envelope(resError.data));
        }
    }

    public async deleteUser(req: Request, res: Response): Promise<void> {
        try {
            let usersService: any = '';
            let id: string = req.params.id;
            usersService = await service.deleteUser(id);
            const resData: any = Handlers.dataHandler(usersService[1], usersService[0]);
            res.status(resData.code).json(envelope(resData.data));
        } catch (error) {
            const resError = Handlers.errorHandler(error, 'BAD_REQUEST');
            res.status(resError.code).json(envelope(resError.data));
        }
    }

    public async updateUser(req: Request, res: Response): Promise<void> {
        try {
            let usersService: any = '';
            let id: string = req.params.id;
            let data: any = req.body;
            usersService = await service.updateUser(id, data);
            const resData: any = Handlers.dataHandler(usersService[1], usersService[0]);
            res.status(resData.code).json(envelope(resData.data));
        } catch (error) {
            const resError = Handlers.errorHandler(error, 'BAD_REQUEST');
            res.status(resError.code).json(envelope(resError.data));
        }
    }
}

export default new usersController();