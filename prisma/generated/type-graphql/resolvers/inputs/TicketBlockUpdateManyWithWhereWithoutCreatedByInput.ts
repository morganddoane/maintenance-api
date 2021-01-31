import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { TicketBlockScalarWhereInput } from "../inputs/TicketBlockScalarWhereInput";
import { TicketBlockUpdateManyMutationInput } from "../inputs/TicketBlockUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TicketBlockUpdateManyWithWhereWithoutCreatedByInput {
  @TypeGraphQL.Field(_type => TicketBlockScalarWhereInput, {
    nullable: false
  })
  where!: TicketBlockScalarWhereInput;

  @TypeGraphQL.Field(_type => TicketBlockUpdateManyMutationInput, {
    nullable: false
  })
  data!: TicketBlockUpdateManyMutationInput;
}
