import { AuthenticationError } from 'apollo-server-express';
import { User, UserRole } from 'prisma/generated/type-graphql';
import { ForbiddenError, ResolverData } from 'type-graphql';

export interface IContext {
    user: User;
}

export function authChecker(
    resolverData: ResolverData<IContext>,
    roles: UserRole[]
): boolean {
    const { context } = resolverData;
    const { user } = context;

    if (!user) throw new AuthenticationError("Haibo! You're not logged in.");

    if (!roles.includes(user.role as UserRole)) throw new ForbiddenError();

    return true;
}
