import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { TicketResponseCreateWithoutTicketInput } from "../inputs/TicketResponseCreateWithoutTicketInput";
import { TicketResponseWhereUniqueInput } from "../inputs/TicketResponseWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TicketResponseCreateOrConnectWithoutTicketInput {
  @TypeGraphQL.Field(_type => TicketResponseWhereUniqueInput, {
    nullable: false
  })
  where!: TicketResponseWhereUniqueInput;

  @TypeGraphQL.Field(_type => TicketResponseCreateWithoutTicketInput, {
    nullable: false
  })
  create!: TicketResponseCreateWithoutTicketInput;
}
