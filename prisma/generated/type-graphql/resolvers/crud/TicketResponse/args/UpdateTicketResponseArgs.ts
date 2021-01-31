import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { TicketResponseUpdateInput } from "../../../inputs/TicketResponseUpdateInput";
import { TicketResponseWhereUniqueInput } from "../../../inputs/TicketResponseWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateTicketResponseArgs {
  @TypeGraphQL.Field(_type => TicketResponseUpdateInput, {
    nullable: false
  })
  data!: TicketResponseUpdateInput;

  @TypeGraphQL.Field(_type => TicketResponseWhereUniqueInput, {
    nullable: false
  })
  where!: TicketResponseWhereUniqueInput;
}
