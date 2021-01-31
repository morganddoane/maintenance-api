import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { TicketResponseCreateWithoutTicketInput } from "../inputs/TicketResponseCreateWithoutTicketInput";
import { TicketResponseUpdateWithoutTicketInput } from "../inputs/TicketResponseUpdateWithoutTicketInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TicketResponseUpsertWithoutTicketInput {
  @TypeGraphQL.Field(_type => TicketResponseUpdateWithoutTicketInput, {
    nullable: false
  })
  update!: TicketResponseUpdateWithoutTicketInput;

  @TypeGraphQL.Field(_type => TicketResponseCreateWithoutTicketInput, {
    nullable: false
  })
  create!: TicketResponseCreateWithoutTicketInput;
}
