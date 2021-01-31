import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { TicketExpenseWhereInput } from "../../../inputs/TicketExpenseWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyTicketExpenseArgs {
  @TypeGraphQL.Field(_type => TicketExpenseWhereInput, {
    nullable: true
  })
  where?: TicketExpenseWhereInput | undefined;
}
