import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { TicketExpenseWhereUniqueInput } from "../../../inputs/TicketExpenseWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueTicketExpenseArgs {
  @TypeGraphQL.Field(_type => TicketExpenseWhereUniqueInput, {
    nullable: false
  })
  where!: TicketExpenseWhereUniqueInput;
}
