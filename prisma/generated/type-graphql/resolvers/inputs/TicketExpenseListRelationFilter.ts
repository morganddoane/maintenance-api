import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { TicketExpenseWhereInput } from "../inputs/TicketExpenseWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TicketExpenseListRelationFilter {
  @TypeGraphQL.Field(_type => TicketExpenseWhereInput, {
    nullable: true
  })
  every?: TicketExpenseWhereInput | undefined;

  @TypeGraphQL.Field(_type => TicketExpenseWhereInput, {
    nullable: true
  })
  some?: TicketExpenseWhereInput | undefined;

  @TypeGraphQL.Field(_type => TicketExpenseWhereInput, {
    nullable: true
  })
  none?: TicketExpenseWhereInput | undefined;
}
