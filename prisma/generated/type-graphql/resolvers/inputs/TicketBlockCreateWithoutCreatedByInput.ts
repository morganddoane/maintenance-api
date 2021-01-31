import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { TicketCreateManyWithoutTicketBlockInput } from "../inputs/TicketCreateManyWithoutTicketBlockInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TicketBlockCreateWithoutCreatedByInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  story!: string;

  @TypeGraphQL.Field(_type => TicketCreateManyWithoutTicketBlockInput, {
    nullable: true
  })
  Ticket?: TicketCreateManyWithoutTicketBlockInput | undefined;
}
