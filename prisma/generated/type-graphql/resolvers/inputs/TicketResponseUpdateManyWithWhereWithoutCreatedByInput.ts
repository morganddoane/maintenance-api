import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { TicketResponseScalarWhereInput } from "../inputs/TicketResponseScalarWhereInput";
import { TicketResponseUpdateManyMutationInput } from "../inputs/TicketResponseUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TicketResponseUpdateManyWithWhereWithoutCreatedByInput {
  @TypeGraphQL.Field(_type => TicketResponseScalarWhereInput, {
    nullable: false
  })
  where!: TicketResponseScalarWhereInput;

  @TypeGraphQL.Field(_type => TicketResponseUpdateManyMutationInput, {
    nullable: false
  })
  data!: TicketResponseUpdateManyMutationInput;
}
