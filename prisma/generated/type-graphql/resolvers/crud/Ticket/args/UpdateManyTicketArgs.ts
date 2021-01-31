import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { TicketUpdateManyMutationInput } from "../../../inputs/TicketUpdateManyMutationInput";
import { TicketWhereInput } from "../../../inputs/TicketWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyTicketArgs {
  @TypeGraphQL.Field(_type => TicketUpdateManyMutationInput, {
    nullable: false
  })
  data!: TicketUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => TicketWhereInput, {
    nullable: true
  })
  where?: TicketWhereInput | undefined;
}
