import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { TicketExpenseCreateOrConnectWithoutcreatedByInput } from "../inputs/TicketExpenseCreateOrConnectWithoutcreatedByInput";
import { TicketExpenseCreateWithoutCreatedByInput } from "../inputs/TicketExpenseCreateWithoutCreatedByInput";
import { TicketExpenseWhereUniqueInput } from "../inputs/TicketExpenseWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TicketExpenseCreateManyWithoutCreatedByInput {
  @TypeGraphQL.Field(_type => [TicketExpenseCreateWithoutCreatedByInput], {
    nullable: true
  })
  create?: TicketExpenseCreateWithoutCreatedByInput[] | undefined;

  @TypeGraphQL.Field(_type => [TicketExpenseWhereUniqueInput], {
    nullable: true
  })
  connect?: TicketExpenseWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TicketExpenseCreateOrConnectWithoutcreatedByInput], {
    nullable: true
  })
  connectOrCreate?: TicketExpenseCreateOrConnectWithoutcreatedByInput[] | undefined;
}
