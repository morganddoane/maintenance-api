import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { UserCreateWithoutTicketBlockInput } from "../inputs/UserCreateWithoutTicketBlockInput";
import { UserUpdateWithoutTicketBlockInput } from "../inputs/UserUpdateWithoutTicketBlockInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpsertWithoutTicketBlockInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutTicketBlockInput, {
    nullable: false
  })
  update!: UserUpdateWithoutTicketBlockInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutTicketBlockInput, {
    nullable: false
  })
  create!: UserCreateWithoutTicketBlockInput;
}
