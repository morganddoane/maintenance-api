import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { TicketResponseWhereUniqueInput } from "../../../inputs/TicketResponseWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueTicketResponseArgs {
  @TypeGraphQL.Field(_type => TicketResponseWhereUniqueInput, {
    nullable: false
  })
  where!: TicketResponseWhereUniqueInput;
}
