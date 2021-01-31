import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { TicketBlockCreateWithoutCreatedByInput } from "../inputs/TicketBlockCreateWithoutCreatedByInput";
import { TicketBlockWhereUniqueInput } from "../inputs/TicketBlockWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TicketBlockCreateOrConnectWithoutcreatedByInput {
  @TypeGraphQL.Field(_type => TicketBlockWhereUniqueInput, {
    nullable: false
  })
  where!: TicketBlockWhereUniqueInput;

  @TypeGraphQL.Field(_type => TicketBlockCreateWithoutCreatedByInput, {
    nullable: false
  })
  create!: TicketBlockCreateWithoutCreatedByInput;
}
