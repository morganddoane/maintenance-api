import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TicketExpenseScalarWhereInput {
  @TypeGraphQL.Field(_type => [TicketExpenseScalarWhereInput], {
    nullable: true
  })
  AND?: TicketExpenseScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TicketExpenseScalarWhereInput], {
    nullable: true
  })
  OR?: TicketExpenseScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TicketExpenseScalarWhereInput], {
    nullable: true
  })
  NOT?: TicketExpenseScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  userId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  ticketId?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => FloatFilter, {
    nullable: true
  })
  dollars?: FloatFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  description?: StringFilter | undefined;
}
