import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { TicketCreateOrConnectWithoutcreatedByInput } from "../inputs/TicketCreateOrConnectWithoutcreatedByInput";
import { TicketCreateWithoutCreatedByInput } from "../inputs/TicketCreateWithoutCreatedByInput";
import { TicketScalarWhereInput } from "../inputs/TicketScalarWhereInput";
import { TicketUpdateManyWithWhereWithoutCreatedByInput } from "../inputs/TicketUpdateManyWithWhereWithoutCreatedByInput";
import { TicketUpdateWithWhereUniqueWithoutCreatedByInput } from "../inputs/TicketUpdateWithWhereUniqueWithoutCreatedByInput";
import { TicketUpsertWithWhereUniqueWithoutCreatedByInput } from "../inputs/TicketUpsertWithWhereUniqueWithoutCreatedByInput";
import { TicketWhereUniqueInput } from "../inputs/TicketWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TicketUpdateManyWithoutCreatedByInput {
  @TypeGraphQL.Field(_type => [TicketCreateWithoutCreatedByInput], {
    nullable: true
  })
  create?: TicketCreateWithoutCreatedByInput[] | undefined;

  @TypeGraphQL.Field(_type => [TicketWhereUniqueInput], {
    nullable: true
  })
  connect?: TicketWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TicketWhereUniqueInput], {
    nullable: true
  })
  set?: TicketWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TicketWhereUniqueInput], {
    nullable: true
  })
  disconnect?: TicketWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TicketWhereUniqueInput], {
    nullable: true
  })
  delete?: TicketWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TicketUpdateWithWhereUniqueWithoutCreatedByInput], {
    nullable: true
  })
  update?: TicketUpdateWithWhereUniqueWithoutCreatedByInput[] | undefined;

  @TypeGraphQL.Field(_type => [TicketUpdateManyWithWhereWithoutCreatedByInput], {
    nullable: true
  })
  updateMany?: TicketUpdateManyWithWhereWithoutCreatedByInput[] | undefined;

  @TypeGraphQL.Field(_type => [TicketScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TicketScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TicketUpsertWithWhereUniqueWithoutCreatedByInput], {
    nullable: true
  })
  upsert?: TicketUpsertWithWhereUniqueWithoutCreatedByInput[] | undefined;

  @TypeGraphQL.Field(_type => [TicketCreateOrConnectWithoutcreatedByInput], {
    nullable: true
  })
  connectOrCreate?: TicketCreateOrConnectWithoutcreatedByInput[] | undefined;
}
