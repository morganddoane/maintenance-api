import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { TicketBlockWhereInput } from "../../../inputs/TicketBlockWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyTicketBlockArgs {
  @TypeGraphQL.Field(_type => TicketBlockWhereInput, {
    nullable: true
  })
  where?: TicketBlockWhereInput | undefined;
}
