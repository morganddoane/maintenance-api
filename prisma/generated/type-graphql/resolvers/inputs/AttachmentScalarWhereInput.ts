import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AttachmentScalarWhereInput {
  @TypeGraphQL.Field(_type => [AttachmentScalarWhereInput], {
    nullable: true
  })
  AND?: AttachmentScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttachmentScalarWhereInput], {
    nullable: true
  })
  OR?: AttachmentScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttachmentScalarWhereInput], {
    nullable: true
  })
  NOT?: AttachmentScalarWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  url?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  title?: StringNullableFilter | undefined;
}
