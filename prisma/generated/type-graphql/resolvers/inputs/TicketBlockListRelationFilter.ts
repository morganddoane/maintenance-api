import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { TicketBlockWhereInput } from "../inputs/TicketBlockWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TicketBlockListRelationFilter {
  @TypeGraphQL.Field(_type => TicketBlockWhereInput, {
    nullable: true
  })
  every?: TicketBlockWhereInput | undefined;

  @TypeGraphQL.Field(_type => TicketBlockWhereInput, {
    nullable: true
  })
  some?: TicketBlockWhereInput | undefined;

  @TypeGraphQL.Field(_type => TicketBlockWhereInput, {
    nullable: true
  })
  none?: TicketBlockWhereInput | undefined;
}
