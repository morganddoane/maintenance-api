import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { TicketBlockCreateInput } from "../../../inputs/TicketBlockCreateInput";

@TypeGraphQL.ArgsType()
export class CreateTicketBlockArgs {
  @TypeGraphQL.Field(_type => TicketBlockCreateInput, {
    nullable: false
  })
  data!: TicketBlockCreateInput;
}
