import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { TicketResponseWhereInput } from "../inputs/TicketResponseWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TicketResponseRelationFilter {
  @TypeGraphQL.Field(_type => TicketResponseWhereInput, {
    nullable: true
  })
  is?: TicketResponseWhereInput | undefined;

  @TypeGraphQL.Field(_type => TicketResponseWhereInput, {
    nullable: true
  })
  isNot?: TicketResponseWhereInput | undefined;
}
