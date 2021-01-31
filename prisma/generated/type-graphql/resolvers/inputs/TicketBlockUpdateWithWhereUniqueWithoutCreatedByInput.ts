import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { TicketBlockUpdateWithoutCreatedByInput } from "../inputs/TicketBlockUpdateWithoutCreatedByInput";
import { TicketBlockWhereUniqueInput } from "../inputs/TicketBlockWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TicketBlockUpdateWithWhereUniqueWithoutCreatedByInput {
  @TypeGraphQL.Field(_type => TicketBlockWhereUniqueInput, {
    nullable: false
  })
  where!: TicketBlockWhereUniqueInput;

  @TypeGraphQL.Field(_type => TicketBlockUpdateWithoutCreatedByInput, {
    nullable: false
  })
  data!: TicketBlockUpdateWithoutCreatedByInput;
}
