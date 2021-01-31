import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { TicketUpdateWithoutTicketBlockInput } from "../inputs/TicketUpdateWithoutTicketBlockInput";
import { TicketWhereUniqueInput } from "../inputs/TicketWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TicketUpdateWithWhereUniqueWithoutTicketBlockInput {
  @TypeGraphQL.Field(_type => TicketWhereUniqueInput, {
    nullable: false
  })
  where!: TicketWhereUniqueInput;

  @TypeGraphQL.Field(_type => TicketUpdateWithoutTicketBlockInput, {
    nullable: false
  })
  data!: TicketUpdateWithoutTicketBlockInput;
}
