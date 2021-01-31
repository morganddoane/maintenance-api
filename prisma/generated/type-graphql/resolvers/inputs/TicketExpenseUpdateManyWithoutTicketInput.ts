import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { TicketExpenseCreateOrConnectWithoutTicketInput } from "../inputs/TicketExpenseCreateOrConnectWithoutTicketInput";
import { TicketExpenseCreateWithoutTicketInput } from "../inputs/TicketExpenseCreateWithoutTicketInput";
import { TicketExpenseScalarWhereInput } from "../inputs/TicketExpenseScalarWhereInput";
import { TicketExpenseUpdateManyWithWhereWithoutTicketInput } from "../inputs/TicketExpenseUpdateManyWithWhereWithoutTicketInput";
import { TicketExpenseUpdateWithWhereUniqueWithoutTicketInput } from "../inputs/TicketExpenseUpdateWithWhereUniqueWithoutTicketInput";
import { TicketExpenseUpsertWithWhereUniqueWithoutTicketInput } from "../inputs/TicketExpenseUpsertWithWhereUniqueWithoutTicketInput";
import { TicketExpenseWhereUniqueInput } from "../inputs/TicketExpenseWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TicketExpenseUpdateManyWithoutTicketInput {
  @TypeGraphQL.Field(_type => [TicketExpenseCreateWithoutTicketInput], {
    nullable: true
  })
  create?: TicketExpenseCreateWithoutTicketInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [TicketExpenseUpdateWithWhereUniqueWithoutTicketInput], {
    nullable: true
  })
  update?: TicketExpenseUpdateWithWhereUniqueWithoutTicketInput[] | undefined;

  @TypeGraphQL.Field(_type => [TicketExpenseUpdateManyWithWhereWithoutTicketInput], {
    nullable: true
  })
  updateMany?: TicketExpenseUpdateManyWithWhereWithoutTicketInput[] | undefined;

  @TypeGraphQL.Field(_type => [TicketExpenseScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TicketExpenseScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TicketExpenseUpsertWithWhereUniqueWithoutTicketInput], {
    nullable: true
  })
  upsert?: TicketExpenseUpsertWithWhereUniqueWithoutTicketInput[] | undefined;

  @TypeGraphQL.Field(_type => [TicketExpenseCreateOrConnectWithoutTicketInput], {
    nullable: true
  })
  connectOrCreate?: TicketExpenseCreateOrConnectWithoutTicketInput[] | undefined;
}
