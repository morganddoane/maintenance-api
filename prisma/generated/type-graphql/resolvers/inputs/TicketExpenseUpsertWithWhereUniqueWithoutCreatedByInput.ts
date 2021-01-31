import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { TicketExpenseCreateWithoutCreatedByInput } from "../inputs/TicketExpenseCreateWithoutCreatedByInput";
import { TicketExpenseUpdateWithoutCreatedByInput } from "../inputs/TicketExpenseUpdateWithoutCreatedByInput";
import { TicketExpenseWhereUniqueInput } from "../inputs/TicketExpenseWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TicketExpenseUpsertWithWhereUniqueWithoutCreatedByInput {
  @TypeGraphQL.Field(_type => TicketExpenseWhereUniqueInput, {
    nullable: false
  })
  where!: TicketExpenseWhereUniqueInput;

  @TypeGraphQL.Field(_type => TicketExpenseUpdateWithoutCreatedByInput, {
    nullable: false
  })
  update!: TicketExpenseUpdateWithoutCreatedByInput;

  @TypeGraphQL.Field(_type => TicketExpenseCreateWithoutCreatedByInput, {
    nullable: false
  })
  create!: TicketExpenseCreateWithoutCreatedByInput;
}
