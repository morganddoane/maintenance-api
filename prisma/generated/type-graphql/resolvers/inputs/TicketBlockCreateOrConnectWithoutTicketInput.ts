import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { TicketBlockCreateWithoutTicketInput } from "../inputs/TicketBlockCreateWithoutTicketInput";
import { TicketBlockWhereUniqueInput } from "../inputs/TicketBlockWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TicketBlockCreateOrConnectWithoutTicketInput {
  @TypeGraphQL.Field(_type => TicketBlockWhereUniqueInput, {
    nullable: false
  })
  where!: TicketBlockWhereUniqueInput;

  @TypeGraphQL.Field(_type => TicketBlockCreateWithoutTicketInput, {
    nullable: false
  })
  create!: TicketBlockCreateWithoutTicketInput;
}
