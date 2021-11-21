import * as dotenv from 'dotenv';

dotenv.config();

export const PORT: string = process.env.PORT as string;
export const HOST: string = process.env.host as string;
export const USER: string = process.env.user as string;
export const PASSWORD: string = process.env.password as string;
export const DATABASE: string = process.env.database as string;