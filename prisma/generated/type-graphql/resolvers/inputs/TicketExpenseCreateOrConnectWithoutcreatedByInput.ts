import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { TicketExpenseCreateWithoutCreatedByInput } from "../inputs/TicketExpenseCreateWithoutCreatedByInput";
import { TicketExpenseWhereUniqueInput } from "../inputs/TicketExpenseWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TicketExpenseCreateOrConnectWithoutcreatedByInput {
  @TypeGraphQL.Field(_type => TicketExpenseWhereUniqueInput, {
    nullable: false
  })
  where!: TicketExpenseWhereUniqueInput;

  @TypeGraphQL.Field(_type => TicketExpenseCreateWithoutCreatedByInput, {
    nullable: false
  })
  create!: TicketExpenseCreateWithoutCreatedByInput;
}
