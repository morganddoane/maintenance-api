import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { TicketResponseWhereInput } from "../inputs/TicketResponseWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TicketResponseListRelationFilter {
  @TypeGraphQL.Field(_type => TicketResponseWhereInput, {
    nullable: true
  })
  every?: TicketResponseWhereInput | undefined;

  @TypeGraphQL.Field(_type => TicketResponseWhereInput, {
    nullable: true
  })
  some?: TicketResponseWhereInput | undefined;

  @TypeGraphQL.Field(_type => TicketResponseWhereInput, {
    nullable: true
  })
  none?: TicketResponseWhereInput | undefined;
}
