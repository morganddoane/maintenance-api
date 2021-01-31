import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { TicketWhereUniqueInput } from "../../../inputs/TicketWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteTicketArgs {
  @TypeGraphQL.Field(_type => TicketWhereUniqueInput, {
    nullable: false
  })
  where!: TicketWhereUniqueInput;
}
