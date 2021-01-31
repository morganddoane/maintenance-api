import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { TicketExpenseUpdateWithoutCreatedByInput } from "../inputs/TicketExpenseUpdateWithoutCreatedByInput";
import { TicketExpenseWhereUniqueInput } from "../inputs/TicketExpenseWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TicketExpenseUpdateWithWhereUniqueWithoutCreatedByInput {
  @TypeGraphQL.Field(_type => TicketExpenseWhereUniqueInput, {
    nullable: false
  })
  where!: TicketExpenseWhereUniqueInput;

  @TypeGraphQL.Field(_type => TicketExpenseUpdateWithoutCreatedByInput, {
    nullable: false
  })
  data!: TicketExpenseUpdateWithoutCreatedByInput;
}
