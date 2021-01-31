import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { TicketBlockUpdateManyMutationInput } from "../../../inputs/TicketBlockUpdateManyMutationInput";
import { TicketBlockWhereInput } from "../../../inputs/TicketBlockWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyTicketBlockArgs {
  @TypeGraphQL.Field(_type => TicketBlockUpdateManyMutationInput, {
    nullable: false
  })
  data!: TicketBlockUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => TicketBlockWhereInput, {
    nullable: true
  })
  where?: TicketBlockWhereInput | undefined;
}
