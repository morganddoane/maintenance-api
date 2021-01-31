import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { AttachmentListRelationFilter } from "../inputs/AttachmentListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumUserRoleFilter } from "../inputs/EnumUserRoleFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TicketBlockListRelationFilter } from "../inputs/TicketBlockListRelationFilter";
import { TicketExpenseListRelationFilter } from "../inputs/TicketExpenseListRelationFilter";
import { TicketListRelationFilter } from "../inputs/TicketListRelationFilter";
import { TicketResponseListRelationFilter } from "../inputs/TicketResponseListRelationFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserWhereInput {
  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  AND?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  OR?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  NOT?: UserWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => EnumUserRoleFilter, {
    nullable: true
  })
  role?: EnumUserRoleFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  first?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  last?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  email?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  phone?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  password?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => TicketListRelationFilter, {
    nullable: true
  })
  Ticket?: TicketListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TicketExpenseListRelationFilter, {
    nullable: true
  })
  TicketExpense?: TicketExpenseListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TicketResponseListRelationFilter, {
    nullable: true
  })
  TicketResponse?: TicketResponseListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => AttachmentListRelationFilter, {
    nullable: true
  })
  Attachment?: AttachmentListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TicketBlockListRelationFilter, {
    nullable: true
  })
  TicketBlock?: TicketBlockListRelationFilter | undefined;
}
