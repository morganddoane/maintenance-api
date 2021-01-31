import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { TicketCreateOrConnectWithoutresponseInput } from "../inputs/TicketCreateOrConnectWithoutresponseInput";
import { TicketCreateWithoutResponseInput } from "../inputs/TicketCreateWithoutResponseInput";
import { TicketScalarWhereInput } from "../inputs/TicketScalarWhereInput";
import { TicketUpdateManyWithWhereWithoutResponseInput } from "../inputs/TicketUpdateManyWithWhereWithoutResponseInput";
import { TicketUpdateWithWhereUniqueWithoutResponseInput } from "../inputs/TicketUpdateWithWhereUniqueWithoutResponseInput";
import { TicketUpsertWithWhereUniqueWithoutResponseInput } from "../inputs/TicketUpsertWithWhereUniqueWithoutResponseInput";
import { TicketWhereUniqueInput } from "../inputs/TicketWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TicketUpdateManyWithoutResponseInput {
  @TypeGraphQL.Field(_type => [TicketCreateWithoutResponseInput], {
    nullable: true
  })
  create?: TicketCreateWithoutResponseInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [TicketUpdateWithWhereUniqueWithoutResponseInput], {
    nullable: true
  })
  update?: TicketUpdateWithWhereUniqueWithoutResponseInput[] | undefined;

  @TypeGraphQL.Field(_type => [TicketUpdateManyWithWhereWithoutResponseInput], {
    nullable: true
  })
  updateMany?: TicketUpdateManyWithWhereWithoutResponseInput[] | undefined;

  @TypeGraphQL.Field(_type => [TicketScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TicketScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TicketUpsertWithWhereUniqueWithoutResponseInput], {
    nullable: true
  })
  upsert?: TicketUpsertWithWhereUniqueWithoutResponseInput[] | undefined;

  @TypeGraphQL.Field(_type => [TicketCreateOrConnectWithoutresponseInput], {
    nullable: true
  })
  connectOrCreate?: TicketCreateOrConnectWithoutresponseInput[] | undefined;
}
