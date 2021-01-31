import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { TicketResponseWhereInput } from "../../../inputs/TicketResponseWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyTicketResponseArgs {
  @TypeGraphQL.Field(_type => TicketResponseWhereInput, {
    nullable: true
  })
  where?: TicketResponseWhereInput | undefined;
}
