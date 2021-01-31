import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { TicketWhereInput } from "../../../inputs/TicketWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyTicketArgs {
  @TypeGraphQL.Field(_type => TicketWhereInput, {
    nullable: true
  })
  where?: TicketWhereInput | undefined;
}
