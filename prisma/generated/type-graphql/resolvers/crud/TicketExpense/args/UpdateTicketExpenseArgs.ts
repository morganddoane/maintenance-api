import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { TicketExpenseUpdateInput } from "../../../inputs/TicketExpenseUpdateInput";
import { TicketExpenseWhereUniqueInput } from "../../../inputs/TicketExpenseWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateTicketExpenseArgs {
  @TypeGraphQL.Field(_type => TicketExpenseUpdateInput, {
    nullable: false
  })
  data!: TicketExpenseUpdateInput;

  @TypeGraphQL.Field(_type => TicketExpenseWhereUniqueInput, {
    nullable: false
  })
  where!: TicketExpenseWhereUniqueInput;
}
