import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { TicketBlockUpdateInput } from "../../../inputs/TicketBlockUpdateInput";
import { TicketBlockWhereUniqueInput } from "../../../inputs/TicketBlockWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateTicketBlockArgs {
  @TypeGraphQL.Field(_type => TicketBlockUpdateInput, {
    nullable: false
  })
  data!: TicketBlockUpdateInput;

  @TypeGraphQL.Field(_type => TicketBlockWhereUniqueInput, {
    nullable: false
  })
  where!: TicketBlockWhereUniqueInput;
}
