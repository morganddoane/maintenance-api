import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { TicketCreateOrConnectWithoutexpensesInput } from "../inputs/TicketCreateOrConnectWithoutexpensesInput";
import { TicketCreateWithoutExpensesInput } from "../inputs/TicketCreateWithoutExpensesInput";
import { TicketUpdateWithoutExpensesInput } from "../inputs/TicketUpdateWithoutExpensesInput";
import { TicketUpsertWithoutExpensesInput } from "../inputs/TicketUpsertWithoutExpensesInput";
import { TicketWhereUniqueInput } from "../inputs/TicketWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TicketUpdateOneWithoutExpensesInput {
  @TypeGraphQL.Field(_type => TicketCreateWithoutExpensesInput, {
    nullable: true
  })
  create?: TicketCreateWithoutExpensesInput | undefined;

  @TypeGraphQL.Field(_type => TicketWhereUniqueInput, {
    nullable: true
  })
  connect?: TicketWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => TicketUpdateWithoutExpensesInput, {
    nullable: true
  })
  update?: TicketUpdateWithoutExpensesInput | undefined;

  @TypeGraphQL.Field(_type => TicketUpsertWithoutExpensesInput, {
    nullable: true
  })
  upsert?: TicketUpsertWithoutExpensesInput | undefined;

  @TypeGraphQL.Field(_type => TicketCreateOrConnectWithoutexpensesInput, {
    nullable: true
  })
  connectOrCreate?: TicketCreateOrConnectWithoutexpensesInput | undefined;
}
