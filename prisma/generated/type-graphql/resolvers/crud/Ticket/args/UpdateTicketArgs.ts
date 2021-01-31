import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { TicketUpdateInput } from "../../../inputs/TicketUpdateInput";
import { TicketWhereUniqueInput } from "../../../inputs/TicketWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateTicketArgs {
  @TypeGraphQL.Field(_type => TicketUpdateInput, {
    nullable: false
  })
  data!: TicketUpdateInput;

  @TypeGraphQL.Field(_type => TicketWhereUniqueInput, {
    nullable: false
  })
  where!: TicketWhereUniqueInput;
}
