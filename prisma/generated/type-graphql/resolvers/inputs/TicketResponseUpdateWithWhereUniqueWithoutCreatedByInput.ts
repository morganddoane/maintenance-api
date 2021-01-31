import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { TicketResponseUpdateWithoutCreatedByInput } from "../inputs/TicketResponseUpdateWithoutCreatedByInput";
import { TicketResponseWhereUniqueInput } from "../inputs/TicketResponseWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TicketResponseUpdateWithWhereUniqueWithoutCreatedByInput {
  @TypeGraphQL.Field(_type => TicketResponseWhereUniqueInput, {
    nullable: false
  })
  where!: TicketResponseWhereUniqueInput;

  @TypeGraphQL.Field(_type => TicketResponseUpdateWithoutCreatedByInput, {
    nullable: false
  })
  data!: TicketResponseUpdateWithoutCreatedByInput;
}
