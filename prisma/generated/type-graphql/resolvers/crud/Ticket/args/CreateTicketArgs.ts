import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { TicketCreateInput } from "../../../inputs/TicketCreateInput";

@TypeGraphQL.ArgsType()
export class CreateTicketArgs {
  @TypeGraphQL.Field(_type => TicketCreateInput, {
    nullable: false
  })
  data!: TicketCreateInput;
}
