import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { TicketUpdateWithoutResponseInput } from "../inputs/TicketUpdateWithoutResponseInput";
import { TicketWhereUniqueInput } from "../inputs/TicketWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TicketUpdateWithWhereUniqueWithoutResponseInput {
  @TypeGraphQL.Field(_type => TicketWhereUniqueInput, {
    nullable: false
  })
  where!: TicketWhereUniqueInput;

  @TypeGraphQL.Field(_type => TicketUpdateWithoutResponseInput, {
    nullable: false
  })
  data!: TicketUpdateWithoutResponseInput;
}
