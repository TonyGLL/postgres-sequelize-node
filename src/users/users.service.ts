import User, { IUser } from './users.model';

class usersServices {
    public async getUsers(queries: any): Promise<any> {
        try {
            const users = await User.findAll({
                where: {
                    status: true
                }
            });
            return [
                'GET',
                {
                    users
                }
            ];
        } catch (error) {
            return error;
        }
    }

    public async getUserById(id: string): Promise<any> {
        try {
            const user = await User.findByPk(id);
            return [
                'GET',
                {
                    user
                }
            ];
        } catch (error) {
            return error;
        }
    }

    public async createUser(user: IUser): Promise<any> {
        try {
            const existsEmail = await User.findOne({
                where: {
                    email: user.email
                }
            });
            if (existsEmail || (user.role !== 'USER' && user.role !== 'ADMIN')) {
                throw new Error();
            } else {
                await User.create(user);
                return [
                    'POST',
                    {
                        message: 'User created successfully!!!'
                    }
                ];
            }
        } catch (error) {
            return error;
        }
    }

    public async deleteUser(id: string): Promise<any> {
        try {
            const user = await User.findByPk(id);
            await user?.update({ status: false });
            return [
                'DELETE',
                {
                    message: 'User deleted successfully!!!'
                }
            ];
        } catch (error) {
            return error;
        }
    }

    public async updateUser(id: string, data: any): Promise<any> {
        try {
            const user = await User.findByPk(id);
            await user?.update(data);
            return [
                'PUT',
                {
                    message: 'User updated successfully!!!'
                }
            ];
        } catch (error) {
            return error;
        }
    }
}

export default new usersServices();