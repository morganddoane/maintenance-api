import { User } from 'prisma/generated/type-graphql';
import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class AuthPayload {
    @Field()
    token: string;

    @Field(() => User)
    user: User;
}
