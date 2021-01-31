import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { TicketResponseCreateInput } from "../../../inputs/TicketResponseCreateInput";

@TypeGraphQL.ArgsType()
export class CreateTicketResponseArgs {
  @TypeGraphQL.Field(_type => TicketResponseCreateInput, {
    nullable: false
  })
  data!: TicketResponseCreateInput;
}
