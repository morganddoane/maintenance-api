import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { TicketBlockCreateOrConnectWithoutcreatedByInput } from "../inputs/TicketBlockCreateOrConnectWithoutcreatedByInput";
import { TicketBlockCreateWithoutCreatedByInput } from "../inputs/TicketBlockCreateWithoutCreatedByInput";
import { TicketBlockScalarWhereInput } from "../inputs/TicketBlockScalarWhereInput";
import { TicketBlockUpdateManyWithWhereWithoutCreatedByInput } from "../inputs/TicketBlockUpdateManyWithWhereWithoutCreatedByInput";
import { TicketBlockUpdateWithWhereUniqueWithoutCreatedByInput } from "../inputs/TicketBlockUpdateWithWhereUniqueWithoutCreatedByInput";
import { TicketBlockUpsertWithWhereUniqueWithoutCreatedByInput } from "../inputs/TicketBlockUpsertWithWhereUniqueWithoutCreatedByInput";
import { TicketBlockWhereUniqueInput } from "../inputs/TicketBlockWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TicketBlockUpdateManyWithoutCreatedByInput {
  @TypeGraphQL.Field(_type => [TicketBlockCreateWithoutCreatedByInput], {
    nullable: true
  })
  create?: TicketBlockCreateWithoutCreatedByInput[] | undefined;

  @TypeGraphQL.Field(_type => [TicketBlockWhereUniqueInput], {
    nullable: true
  })
  connect?: TicketBlockWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TicketBlockWhereUniqueInput], {
    nullable: true
  })
  set?: TicketBlockWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TicketBlockWhereUniqueInput], {
    nullable: true
  })
  disconnect?: TicketBlockWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TicketBlockWhereUniqueInput], {
    nullable: true
  })
  delete?: TicketBlockWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TicketBlockUpdateWithWhereUniqueWithoutCreatedByInput], {
    nullable: true
  })
  update?: TicketBlockUpdateWithWhereUniqueWithoutCreatedByInput[] | undefined;

  @TypeGraphQL.Field(_type => [TicketBlockUpdateManyWithWhereWithoutCreatedByInput], {
    nullable: true
  })
  updateMany?: TicketBlockUpdateManyWithWhereWithoutCreatedByInput[] | undefined;

  @TypeGraphQL.Field(_type => [TicketBlockScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TicketBlockScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TicketBlockUpsertWithWhereUniqueWithoutCreatedByInput], {
    nullable: true
  })
  upsert?: TicketBlockUpsertWithWhereUniqueWithoutCreatedByInput[] | undefined;

  @TypeGraphQL.Field(_type => [TicketBlockCreateOrConnectWithoutcreatedByInput], {
    nullable: true
  })
  connectOrCreate?: TicketBlockCreateOrConnectWithoutcreatedByInput[] | undefined;
}
