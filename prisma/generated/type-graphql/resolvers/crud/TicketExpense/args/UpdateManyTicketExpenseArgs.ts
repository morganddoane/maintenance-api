import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { TicketExpenseUpdateManyMutationInput } from "../../../inputs/TicketExpenseUpdateManyMutationInput";
import { TicketExpenseWhereInput } from "../../../inputs/TicketExpenseWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyTicketExpenseArgs {
  @TypeGraphQL.Field(_type => TicketExpenseUpdateManyMutationInput, {
    nullable: false
  })
  data!: TicketExpenseUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => TicketExpenseWhereInput, {
    nullable: true
  })
  where?: TicketExpenseWhereInput | undefined;
}
