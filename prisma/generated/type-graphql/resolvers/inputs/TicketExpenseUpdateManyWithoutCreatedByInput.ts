import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { TicketExpenseCreateOrConnectWithoutcreatedByInput } from "../inputs/TicketExpenseCreateOrConnectWithoutcreatedByInput";
import { TicketExpenseCreateWithoutCreatedByInput } from "../inputs/TicketExpenseCreateWithoutCreatedByInput";
import { TicketExpenseScalarWhereInput } from "../inputs/TicketExpenseScalarWhereInput";
import { TicketExpenseUpdateManyWithWhereWithoutCreatedByInput } from "../inputs/TicketExpenseUpdateManyWithWhereWithoutCreatedByInput";
import { TicketExpenseUpdateWithWhereUniqueWithoutCreatedByInput } from "../inputs/TicketExpenseUpdateWithWhereUniqueWithoutCreatedByInput";
import { TicketExpenseUpsertWithWhereUniqueWithoutCreatedByInput } from "../inputs/TicketExpenseUpsertWithWhereUniqueWithoutCreatedByInput";
import { TicketExpenseWhereUniqueInput } from "../inputs/TicketExpenseWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TicketExpenseUpdateManyWithoutCreatedByInput {
  @TypeGraphQL.Field(_type => [TicketExpenseCreateWithoutCreatedByInput], {
    nullable: true
  })
  create?: TicketExpenseCreateWithoutCreatedByInput[] | undefined;

  @TypeGraphQL.Field(_type => [TicketExpenseWhereUniqueInput], {
    nullable: true
  })
  connect?: TicketExpenseWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TicketExpenseWhereUniqueInput], {
    nullable: true
  })
  set?: TicketExpenseWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TicketExpenseWhereUniqueInput], {
    nullable: true
  })
  disconnect?: TicketExpenseWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TicketExpenseWhereUniqueInput], {
    nullable: true
  })
  delete?: TicketExpenseWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TicketExpenseUpdateWithWhereUniqueWithoutCreatedByInput], {
    nullable: true
  })
  update?: TicketExpenseUpdateWithWhereUniqueWithoutCreatedByInput[] | undefined;

  @TypeGraphQL.Field(_type => [TicketExpenseUpdateManyWithWhereWithoutCreatedByInput], {
    nullable: true
  })
  updateMany?: TicketExpenseUpdateManyWithWhereWithoutCreatedByInput[] | undefined;

  @TypeGraphQL.Field(_type => [TicketExpenseScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TicketExpenseScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TicketExpenseUpsertWithWhereUniqueWithoutCreatedByInput], {
    nullable: true
  })
  upsert?: TicketExpenseUpsertWithWhereUniqueWithoutCreatedByInput[] | undefined;

  @TypeGraphQL.Field(_type => [TicketExpenseCreateOrConnectWithoutcreatedByInput], {
    nullable: true
  })
  connectOrCreate?: TicketExpenseCreateOrConnectWithoutcreatedByInput[] | undefined;
}
