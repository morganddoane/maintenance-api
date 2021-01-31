import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TicketResponseScalarWhereInput {
  @TypeGraphQL.Field(_type => [TicketResponseScalarWhereInput], {
    nullable: true
  })
  AND?: TicketResponseScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TicketResponseScalarWhereInput], {
    nullable: true
  })
  OR?: TicketResponseScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TicketResponseScalarWhereInput], {
    nullable: true
  })
  NOT?: TicketResponseScalarWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  story?: StringFilter | undefined;
}
