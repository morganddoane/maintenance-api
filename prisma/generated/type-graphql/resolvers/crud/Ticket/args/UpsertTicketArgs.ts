import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { TicketCreateInput } from "../../../inputs/TicketCreateInput";
import { TicketUpdateInput } from "../../../inputs/TicketUpdateInput";
import { TicketWhereUniqueInput } from "../../../inputs/TicketWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertTicketArgs {
  @TypeGraphQL.Field(_type => TicketWhereUniqueInput, {
    nullable: false
  })
  where!: TicketWhereUniqueInput;

  @TypeGraphQL.Field(_type => TicketCreateInput, {
    nullable: false
  })
  create!: TicketCreateInput;

  @TypeGraphQL.Field(_type => TicketUpdateInput, {
    nullable: false
  })
  update!: TicketUpdateInput;
}
