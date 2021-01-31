import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { TicketExpenseCreateInput } from "../../../inputs/TicketExpenseCreateInput";

@TypeGraphQL.ArgsType()
export class CreateTicketExpenseArgs {
  @TypeGraphQL.Field(_type => TicketExpenseCreateInput, {
    nullable: false
  })
  data!: TicketExpenseCreateInput;
}
