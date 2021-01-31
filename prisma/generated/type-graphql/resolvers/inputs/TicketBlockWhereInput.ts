import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TicketListRelationFilter } from "../inputs/TicketListRelationFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TicketBlockWhereInput {
  @TypeGraphQL.Field(_type => [TicketBlockWhereInput], {
    nullable: true
  })
  AND?: TicketBlockWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TicketBlockWhereInput], {
    nullable: true
  })
  OR?: TicketBlockWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TicketBlockWhereInput], {
    nullable: true
  })
  NOT?: TicketBlockWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  createdBy?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  userId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => TicketListRelationFilter, {
    nullable: true
  })
  Ticket?: TicketListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  story?: StringFilter | undefined;
}
