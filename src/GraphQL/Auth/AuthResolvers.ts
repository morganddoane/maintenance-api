import { UserRole } from '@prisma/client';
import { CreateUserArgs, User } from 'prisma/generated/type-graphql';
import { Arg, Args, Authorized, Mutation, Resolver } from 'type-graphql';
import { AuthPayload } from './Auth';

import { PrismaClient } from '@prisma/client';
import { generateJWT } from '@src/Auth/jwt';
import { UserInputError } from 'apollo-server-express';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

@Resolver(() => AuthPayload)
export class AuthResolvers {
    // Admins can create new Admins, Managers, and Users
    @Authorized(UserRole.Admin)
    @Mutation(() => User)
    async createUser(@Args() create: CreateUserArgs): Promise<User> {
        const hashedPassword: string = await new Promise((resolve, reject) => {
            bcrypt.hash(create.data.password, 10, (err, hash) => {
                if (err) reject(err);
                resolve(hash);
            });
        });

        const res = await prisma.user.create({
            data: {
                ...create.data,
                password: hashedPassword,
            },
        });

        return res as User;
    }

    @Mutation((type) => AuthPayload)
    async login(
        @Arg('phoneOrEmail') phoneOrEmail: string,
        @Arg('password') password: string
    ): Promise<AuthPayload> {
        const user = await prisma.user.findFirst({
            where: {
                OR: [
                    {
                        phone: phoneOrEmail,
                    },
                    {
                        email: phoneOrEmail,
                    },
                ],
            },
        });

        if (!user) throw new UserInputError('Oops! That user does not exist.');

        const passwordMatch: boolean = await new Promise((resolve, reject) => {
            bcrypt.compare(password, user.password, (err, res) => {
                if (err) reject(err);
                resolve(res);
            });
        });

        if (passwordMatch === false)
            throw new UserInputError("Yikes! That's not the correct password.");

        return {
            user: user,
            token: generateJWT(new Date(), user),
        };
    }
}
