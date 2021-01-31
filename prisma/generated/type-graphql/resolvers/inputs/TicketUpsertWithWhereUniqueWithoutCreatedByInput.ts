import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { TicketCreateWithoutCreatedByInput } from "../inputs/TicketCreateWithoutCreatedByInput";
import { TicketUpdateWithoutCreatedByInput } from "../inputs/TicketUpdateWithoutCreatedByInput";
import { TicketWhereUniqueInput } from "../inputs/TicketWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TicketUpsertWithWhereUniqueWithoutCreatedByInput {
  @TypeGraphQL.Field(_type => TicketWhereUniqueInput, {
    nullable: false
  })
  where!: TicketWhereUniqueInput;

  @TypeGraphQL.Field(_type => TicketUpdateWithoutCreatedByInput, {
    nullable: false
  })
  update!: TicketUpdateWithoutCreatedByInput;

  @TypeGraphQL.Field(_type => TicketCreateWithoutCreatedByInput, {
    nullable: false
  })
  create!: TicketCreateWithoutCreatedByInput;
}
