import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { TicketBlockCreateWithoutTicketInput } from "../inputs/TicketBlockCreateWithoutTicketInput";
import { TicketBlockUpdateWithoutTicketInput } from "../inputs/TicketBlockUpdateWithoutTicketInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TicketBlockUpsertWithoutTicketInput {
  @TypeGraphQL.Field(_type => TicketBlockUpdateWithoutTicketInput, {
    nullable: false
  })
  update!: TicketBlockUpdateWithoutTicketInput;

  @TypeGraphQL.Field(_type => TicketBlockCreateWithoutTicketInput, {
    nullable: false
  })
  create!: TicketBlockCreateWithoutTicketInput;
}
