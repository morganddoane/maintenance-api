import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { TicketResponseUpdateManyMutationInput } from "../../../inputs/TicketResponseUpdateManyMutationInput";
import { TicketResponseWhereInput } from "../../../inputs/TicketResponseWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyTicketResponseArgs {
  @TypeGraphQL.Field(_type => TicketResponseUpdateManyMutationInput, {
    nullable: false
  })
  data!: TicketResponseUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => TicketResponseWhereInput, {
    nullable: true
  })
  where?: TicketResponseWhereInput | undefined;
}
