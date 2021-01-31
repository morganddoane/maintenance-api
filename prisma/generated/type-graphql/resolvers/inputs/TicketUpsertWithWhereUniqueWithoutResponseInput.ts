import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { TicketCreateWithoutResponseInput } from "../inputs/TicketCreateWithoutResponseInput";
import { TicketUpdateWithoutResponseInput } from "../inputs/TicketUpdateWithoutResponseInput";
import { TicketWhereUniqueInput } from "../inputs/TicketWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TicketUpsertWithWhereUniqueWithoutResponseInput {
  @TypeGraphQL.Field(_type => TicketWhereUniqueInput, {
    nullable: false
  })
  where!: TicketWhereUniqueInput;

  @TypeGraphQL.Field(_type => TicketUpdateWithoutResponseInput, {
    nullable: false
  })
  update!: TicketUpdateWithoutResponseInput;

  @TypeGraphQL.Field(_type => TicketCreateWithoutResponseInput, {
    nullable: false
  })
  create!: TicketCreateWithoutResponseInput;
}
