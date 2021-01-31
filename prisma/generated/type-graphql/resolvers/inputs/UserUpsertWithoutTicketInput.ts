import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { UserCreateWithoutTicketInput } from "../inputs/UserCreateWithoutTicketInput";
import { UserUpdateWithoutTicketInput } from "../inputs/UserUpdateWithoutTicketInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpsertWithoutTicketInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutTicketInput, {
    nullable: false
  })
  update!: UserUpdateWithoutTicketInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutTicketInput, {
    nullable: false
  })
  create!: UserCreateWithoutTicketInput;
}
