import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { TicketScalarWhereInput } from "../inputs/TicketScalarWhereInput";
import { TicketUpdateManyMutationInput } from "../inputs/TicketUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TicketUpdateManyWithWhereWithoutResponseInput {
  @TypeGraphQL.Field(_type => TicketScalarWhereInput, {
    nullable: false
  })
  where!: TicketScalarWhereInput;

  @TypeGraphQL.Field(_type => TicketUpdateManyMutationInput, {
    nullable: false
  })
  data!: TicketUpdateManyMutationInput;
}
