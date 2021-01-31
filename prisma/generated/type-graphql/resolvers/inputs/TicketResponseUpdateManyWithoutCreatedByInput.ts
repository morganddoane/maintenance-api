import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { TicketResponseCreateOrConnectWithoutcreatedByInput } from "../inputs/TicketResponseCreateOrConnectWithoutcreatedByInput";
import { TicketResponseCreateWithoutCreatedByInput } from "../inputs/TicketResponseCreateWithoutCreatedByInput";
import { TicketResponseScalarWhereInput } from "../inputs/TicketResponseScalarWhereInput";
import { TicketResponseUpdateManyWithWhereWithoutCreatedByInput } from "../inputs/TicketResponseUpdateManyWithWhereWithoutCreatedByInput";
import { TicketResponseUpdateWithWhereUniqueWithoutCreatedByInput } from "../inputs/TicketResponseUpdateWithWhereUniqueWithoutCreatedByInput";
import { TicketResponseUpsertWithWhereUniqueWithoutCreatedByInput } from "../inputs/TicketResponseUpsertWithWhereUniqueWithoutCreatedByInput";
import { TicketResponseWhereUniqueInput } from "../inputs/TicketResponseWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TicketResponseUpdateManyWithoutCreatedByInput {
  @TypeGraphQL.Field(_type => [TicketResponseCreateWithoutCreatedByInput], {
    nullable: true
  })
  create?: TicketResponseCreateWithoutCreatedByInput[] | undefined;

  @TypeGraphQL.Field(_type => [TicketResponseWhereUniqueInput], {
    nullable: true
  })
  connect?: TicketResponseWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TicketResponseWhereUniqueInput], {
    nullable: true
  })
  set?: TicketResponseWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TicketResponseWhereUniqueInput], {
    nullable: true
  })
  disconnect?: TicketResponseWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TicketResponseWhereUniqueInput], {
    nullable: true
  })
  delete?: TicketResponseWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TicketResponseUpdateWithWhereUniqueWithoutCreatedByInput], {
    nullable: true
  })
  update?: TicketResponseUpdateWithWhereUniqueWithoutCreatedByInput[] | undefined;

  @TypeGraphQL.Field(_type => [TicketResponseUpdateManyWithWhereWithoutCreatedByInput], {
    nullable: true
  })
  updateMany?: TicketResponseUpdateManyWithWhereWithoutCreatedByInput[] | undefined;

  @TypeGraphQL.Field(_type => [TicketResponseScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TicketResponseScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TicketResponseUpsertWithWhereUniqueWithoutCreatedByInput], {
    nullable: true
  })
  upsert?: TicketResponseUpsertWithWhereUniqueWithoutCreatedByInput[] | undefined;

  @TypeGraphQL.Field(_type => [TicketResponseCreateOrConnectWithoutcreatedByInput], {
    nullable: true
  })
  connectOrCreate?: TicketResponseCreateOrConnectWithoutcreatedByInput[] | undefined;
}
