import dotenv from 'dotenv';
import 'module-alias/register';
import 'reflect-metadata';

dotenv.config();

export const env = {
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT,
    CORS_WHITELIST: (process.env.CORS_WHITELIST + '').split(' '),
    JWT_SECRET_KEY: process.env.JWT_SECRET_KEY + '',
    JWT_DURATION_MINUTES: parseInt(process.env.JWT_DURATION_MINUTES + ''),
};
