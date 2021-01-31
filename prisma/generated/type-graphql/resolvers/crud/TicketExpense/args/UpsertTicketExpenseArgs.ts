import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { TicketExpenseCreateInput } from "../../../inputs/TicketExpenseCreateInput";
import { TicketExpenseUpdateInput } from "../../../inputs/TicketExpenseUpdateInput";
import { TicketExpenseWhereUniqueInput } from "../../../inputs/TicketExpenseWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertTicketExpenseArgs {
  @TypeGraphQL.Field(_type => TicketExpenseWhereUniqueInput, {
    nullable: false
  })
  where!: TicketExpenseWhereUniqueInput;

  @TypeGraphQL.Field(_type => TicketExpenseCreateInput, {
    nullable: false
  })
  create!: TicketExpenseCreateInput;

  @TypeGraphQL.Field(_type => TicketExpenseUpdateInput, {
    nullable: false
  })
  update!: TicketExpenseUpdateInput;
}
