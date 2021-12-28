import { createTransport } from 'nodemailer';
import hbs from 'nodemailer-express-handlebars';
import { EMAIL_USER, EMAIL_PASS, EMAIL_HOST, EMAIL_PORT } from '../config/env';


export class MailHelper {
    constructor(to: string, subject: string, text: string, from?: string, template?: string, context?: any) {
        this.to = to;
        this.subject = subject;
        this.text = text;
        this.from = from ? from : '';
        this.template = template ? template : '';
        this.context = context;
    }
    private to: string;
    private subject: string;
    private text: string;
    private from: string;
    private template: string;
    private context: any;

    private getHandleBarsOptions = {
        viewEngine: {
            extName: '.hbs',
            layoutsDir: 'views/layouts',
            partialsDir: 'views/partials',
            defaultLayout: 'main.hbs',
        },
        viewPath: 'views/',
        extName: '.hbs',
    };

    public async sendMailWithTemplate(): Promise<any> {
        try {
            const options: any = {
                from: this.from ? this.from : EMAIL_USER,
                to: this.to,
                subject: this.subject,
                layout: 'main',
                text: this.text,
                template: this.template,
                context: { ...this.context },
            }
            this.transporter.use('compile', hbs(this.getHandleBarsOptions));
            return await this.transporter.sendMail(options);
        } catch (error) {
            return error;
        }
    }

    public async sendMail(): Promise<any> {
        try {
            return await this.transporter.sendMail({
                from: this.from ? `Admin-pro <${this.from}>` : `Admin-pro <${EMAIL_USER}>`,
                to: this.to,
                subject: this.subject,
                text: this.text,
            });
        } catch (error) {
            return error;
        }
    }

    private transporter = createTransport({
        host: EMAIL_HOST,
        port: EMAIL_PORT,
        auth: {
            user: EMAIL_USER,
            pass: EMAIL_PASS,
        }
    });
}