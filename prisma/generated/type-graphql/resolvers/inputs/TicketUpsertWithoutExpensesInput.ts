import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { TicketCreateWithoutExpensesInput } from "../inputs/TicketCreateWithoutExpensesInput";
import { TicketUpdateWithoutExpensesInput } from "../inputs/TicketUpdateWithoutExpensesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TicketUpsertWithoutExpensesInput {
  @TypeGraphQL.Field(_type => TicketUpdateWithoutExpensesInput, {
    nullable: false
  })
  update!: TicketUpdateWithoutExpensesInput;

  @TypeGraphQL.Field(_type => TicketCreateWithoutExpensesInput, {
    nullable: false
  })
  create!: TicketCreateWithoutExpensesInput;
}
