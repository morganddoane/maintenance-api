import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { UserCreateWithoutTicketExpenseInput } from "../inputs/UserCreateWithoutTicketExpenseInput";
import { UserUpdateWithoutTicketExpenseInput } from "../inputs/UserUpdateWithoutTicketExpenseInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpsertWithoutTicketExpenseInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutTicketExpenseInput, {
    nullable: false
  })
  update!: UserUpdateWithoutTicketExpenseInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutTicketExpenseInput, {
    nullable: false
  })
  create!: UserCreateWithoutTicketExpenseInput;
}
