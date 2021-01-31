import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { TicketBlockWhereInput } from "../inputs/TicketBlockWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TicketBlockRelationFilter {
  @TypeGraphQL.Field(_type => TicketBlockWhereInput, {
    nullable: true
  })
  is?: TicketBlockWhereInput | undefined;

  @TypeGraphQL.Field(_type => TicketBlockWhereInput, {
    nullable: true
  })
  isNot?: TicketBlockWhereInput | undefined;
}
