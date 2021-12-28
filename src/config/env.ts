import * as dotenv from 'dotenv';
import { join } from 'path';

dotenv.config({ path: join(__dirname, '../../', `.env.${process.env.NODE_ENV || 'local'}`) });

export const PORT: string = process.env.PORT as string;
export const HOST: string = process.env.host as string;
export const USER: string = process.env.user as string;
export const PASSWORD: string = process.env.password as string;
export const DATABASE: string = process.env.database as string;
export const JWT_SECRET: string = process.env.JWT_SECRET as string;
export const EMAIL_USER: string = process.env.EMAIL_USER as string;
export const EMAIL_PASS: string = process.env.EMAIL_PASS as string;
export const EMAIL_HOST: string = process.env.EMAIL_HOST as string;
export const EMAIL_PORT = Number(process.env.EMAIL_PORT);
export const URL: string = process.env.URL as string;
export const URL_FB = String(process.env.URL_FB);
export const URL_INSTAGRAM = String(process.env.URL_INSTAGRAM);
export const URL_TWITTER = String(process.env.URL_TWITTER);
export const URL_WHATSAPP = String(process.env.URL_WHATSAPP);