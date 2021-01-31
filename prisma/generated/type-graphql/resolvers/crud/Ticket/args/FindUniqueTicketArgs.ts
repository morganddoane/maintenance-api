import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { TicketWhereUniqueInput } from "../../../inputs/TicketWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueTicketArgs {
  @TypeGraphQL.Field(_type => TicketWhereUniqueInput, {
    nullable: false
  })
  where!: TicketWhereUniqueInput;
}
