import { env } from '@src/config';
import { addMinutes, getUnixTime } from 'date-fns';
import jwt from 'jsonwebtoken';
import { User } from 'prisma/generated/type-graphql';

export interface IJwt {
    iss: string;
    iat: number;
    exp: number;
    user: User;
}

export const generateJWT = (date: Date, user: User): string => {
    return jwt.sign(
        {
            iss: 'maintenance-api',
            iat: getUnixTime(date),
            exp: getUnixTime(addMinutes(date, env.JWT_DURATION_MINUTES)),
            user: user,
        } as IJwt,
        env.JWT_SECRET_KEY
    );
};
