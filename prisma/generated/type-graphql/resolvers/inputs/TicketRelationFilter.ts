import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { TicketWhereInput } from "../inputs/TicketWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TicketRelationFilter {
  @TypeGraphQL.Field(_type => TicketWhereInput, {
    nullable: true
  })
  is?: TicketWhereInput | undefined;

  @TypeGraphQL.Field(_type => TicketWhereInput, {
    nullable: true
  })
  isNot?: TicketWhereInput | undefined;
}
