import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { UserCreateOneWithoutTicketBlockInput } from "../inputs/UserCreateOneWithoutTicketBlockInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TicketBlockCreateWithoutTicketInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  story!: string;

  @TypeGraphQL.Field(_type => UserCreateOneWithoutTicketBlockInput, {
    nullable: false
  })
  createdBy!: UserCreateOneWithoutTicketBlockInput;
}
