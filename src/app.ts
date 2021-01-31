import { env } from './config';

import 'module-alias/register';
import 'reflect-metadata';

import express from 'express';
import jwt from 'jsonwebtoken';

import { PrismaClient } from '@prisma/client';
import { buildSchema } from 'type-graphql';
import { ApolloServer } from 'apollo-server-express';

import { TicketCrudResolver, User } from '../prisma/generated/type-graphql';
import { authChecker } from './Auth/authChecker';
import { AuthResolvers } from './GraphQL/Auth/AuthResolvers';

const prisma = new PrismaClient();
const path = '/graphql';

export interface IContext {
    user: User;
}

async function main() {
    const app = express();

    const schema = await buildSchema({
        resolvers: [AuthResolvers, TicketCrudResolver],
        authChecker: authChecker,
    });

    const server = new ApolloServer({
        schema,
        context: (req) => {
            const token = (req.req.headers.authorization + '').replace(
                'Bearer ',
                ''
            );

            let user = undefined;

            jwt.verify(token, env.JWT_SECRET_KEY, (err, decoded: any): void => {
                if (!err && decoded) {
                    user = decoded.user;
                }
            });

            return {
                user: user,
            };
        },
    });

    server.applyMiddleware({
        app,
        path,
        cors: {
            origin: function (origin, callback) {
                if (
                    origin === undefined ||
                    env.CORS_WHITELIST.includes(origin)
                ) {
                    callback(null, true);
                } else {
                    callback(new Error(origin));
                }
            },
            credentials: true,
        },
    });

    app.listen({ port: env.PORT }, () =>
        console.log(`Server running on port ${env.PORT}`)
    );
}

main()
    .catch((e) => {
        throw e;
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
