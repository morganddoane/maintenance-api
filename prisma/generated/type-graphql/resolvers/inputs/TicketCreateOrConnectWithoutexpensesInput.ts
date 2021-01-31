import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { TicketCreateWithoutExpensesInput } from "../inputs/TicketCreateWithoutExpensesInput";
import { TicketWhereUniqueInput } from "../inputs/TicketWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TicketCreateOrConnectWithoutexpensesInput {
  @TypeGraphQL.Field(_type => TicketWhereUniqueInput, {
    nullable: false
  })
  where!: TicketWhereUniqueInput;

  @TypeGraphQL.Field(_type => TicketCreateWithoutExpensesInput, {
    nullable: false
  })
  create!: TicketCreateWithoutExpensesInput;
}
