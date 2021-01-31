import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TicketBlockScalarWhereInput {
  @TypeGraphQL.Field(_type => [TicketBlockScalarWhereInput], {
    nullable: true
  })
  AND?: TicketBlockScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TicketBlockScalarWhereInput], {
    nullable: true
  })
  OR?: TicketBlockScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TicketBlockScalarWhereInput], {
    nullable: true
  })
  NOT?: TicketBlockScalarWhereInput[] | undefined;

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
