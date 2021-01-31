import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { TicketBlockCreateInput } from "../../../inputs/TicketBlockCreateInput";
import { TicketBlockUpdateInput } from "../../../inputs/TicketBlockUpdateInput";
import { TicketBlockWhereUniqueInput } from "../../../inputs/TicketBlockWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertTicketBlockArgs {
  @TypeGraphQL.Field(_type => TicketBlockWhereUniqueInput, {
    nullable: false
  })
  where!: TicketBlockWhereUniqueInput;

  @TypeGraphQL.Field(_type => TicketBlockCreateInput, {
    nullable: false
  })
  create!: TicketBlockCreateInput;

  @TypeGraphQL.Field(_type => TicketBlockUpdateInput, {
    nullable: false
  })
  update!: TicketBlockUpdateInput;
}
