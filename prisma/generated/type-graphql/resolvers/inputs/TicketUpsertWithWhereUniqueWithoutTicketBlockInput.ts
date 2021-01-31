import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { TicketCreateWithoutTicketBlockInput } from "../inputs/TicketCreateWithoutTicketBlockInput";
import { TicketUpdateWithoutTicketBlockInput } from "../inputs/TicketUpdateWithoutTicketBlockInput";
import { TicketWhereUniqueInput } from "../inputs/TicketWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TicketUpsertWithWhereUniqueWithoutTicketBlockInput {
  @TypeGraphQL.Field(_type => TicketWhereUniqueInput, {
    nullable: false
  })
  where!: TicketWhereUniqueInput;

  @TypeGraphQL.Field(_type => TicketUpdateWithoutTicketBlockInput, {
    nullable: false
  })
  update!: TicketUpdateWithoutTicketBlockInput;

  @TypeGraphQL.Field(_type => TicketCreateWithoutTicketBlockInput, {
    nullable: false
  })
  create!: TicketCreateWithoutTicketBlockInput;
}
