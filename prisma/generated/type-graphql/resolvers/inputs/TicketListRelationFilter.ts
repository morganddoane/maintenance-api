import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { TicketWhereInput } from "../inputs/TicketWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TicketListRelationFilter {
  @TypeGraphQL.Field(_type => TicketWhereInput, {
    nullable: true
  })
  every?: TicketWhereInput | undefined;

  @TypeGraphQL.Field(_type => TicketWhereInput, {
    nullable: true
  })
  some?: TicketWhereInput | undefined;

  @TypeGraphQL.Field(_type => TicketWhereInput, {
    nullable: true
  })
  none?: TicketWhereInput | undefined;
}
