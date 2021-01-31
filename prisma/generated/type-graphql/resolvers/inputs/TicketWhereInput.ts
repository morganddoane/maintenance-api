import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { AttachmentListRelationFilter } from "../inputs/AttachmentListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { EnumTicketStateFilter } from "../inputs/EnumTicketStateFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";
import { TicketBlockRelationFilter } from "../inputs/TicketBlockRelationFilter";
import { TicketExpenseListRelationFilter } from "../inputs/TicketExpenseListRelationFilter";
import { TicketResponseRelationFilter } from "../inputs/TicketResponseRelationFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TicketWhereInput {
  @TypeGraphQL.Field(_type => [TicketWhereInput], {
    nullable: true
  })
  AND?: TicketWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TicketWhereInput], {
    nullable: true
  })
  OR?: TicketWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TicketWhereInput], {
    nullable: true
  })
  NOT?: TicketWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  createdBy?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  userId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  title?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  note?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  due?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => TicketExpenseListRelationFilter, {
    nullable: true
  })
  expenses?: TicketExpenseListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TicketResponseRelationFilter, {
    nullable: true
  })
  response?: TicketResponseRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  ticketResponseId?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => EnumTicketStateFilter, {
    nullable: true
  })
  state?: EnumTicketStateFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableListFilter, {
    nullable: true
  })
  seenBy?: StringNullableListFilter | undefined;

  @TypeGraphQL.Field(_type => AttachmentListRelationFilter, {
    nullable: true
  })
  attachments?: AttachmentListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TicketBlockRelationFilter, {
    nullable: true
  })
  TicketBlock?: TicketBlockRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  ticketBlockId?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableListFilter, {
    nullable: true
  })
  tags?: StringNullableListFilter | undefined;
}
