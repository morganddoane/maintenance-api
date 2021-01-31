import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { TicketExpenseCreateWithoutTicketInput } from "../inputs/TicketExpenseCreateWithoutTicketInput";
import { TicketExpenseWhereUniqueInput } from "../inputs/TicketExpenseWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TicketExpenseCreateOrConnectWithoutTicketInput {
  @TypeGraphQL.Field(_type => TicketExpenseWhereUniqueInput, {
    nullable: false
  })
  where!: TicketExpenseWhereUniqueInput;

  @TypeGraphQL.Field(_type => TicketExpenseCreateWithoutTicketInput, {
    nullable: false
  })
  create!: TicketExpenseCreateWithoutTicketInput;
}
