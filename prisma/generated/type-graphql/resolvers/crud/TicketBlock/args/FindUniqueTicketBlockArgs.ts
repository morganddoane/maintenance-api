import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { TicketBlockWhereUniqueInput } from "../../../inputs/TicketBlockWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueTicketBlockArgs {
  @TypeGraphQL.Field(_type => TicketBlockWhereUniqueInput, {
    nullable: false
  })
  where!: TicketBlockWhereUniqueInput;
}
