import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { TicketResponseCreateInput } from "../../../inputs/TicketResponseCreateInput";
import { TicketResponseUpdateInput } from "../../../inputs/TicketResponseUpdateInput";
import { TicketResponseWhereUniqueInput } from "../../../inputs/TicketResponseWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertTicketResponseArgs {
  @TypeGraphQL.Field(_type => TicketResponseWhereUniqueInput, {
    nullable: false
  })
  where!: TicketResponseWhereUniqueInput;

  @TypeGraphQL.Field(_type => TicketResponseCreateInput, {
    nullable: false
  })
  create!: TicketResponseCreateInput;

  @TypeGraphQL.Field(_type => TicketResponseUpdateInput, {
    nullable: false
  })
  update!: TicketResponseUpdateInput;
}
