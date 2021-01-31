import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { UserCreateWithoutTicketResponseInput } from "../inputs/UserCreateWithoutTicketResponseInput";
import { UserUpdateWithoutTicketResponseInput } from "../inputs/UserUpdateWithoutTicketResponseInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpsertWithoutTicketResponseInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutTicketResponseInput, {
    nullable: false
  })
  update!: UserUpdateWithoutTicketResponseInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutTicketResponseInput, {
    nullable: false
  })
  create!: UserCreateWithoutTicketResponseInput;
}
