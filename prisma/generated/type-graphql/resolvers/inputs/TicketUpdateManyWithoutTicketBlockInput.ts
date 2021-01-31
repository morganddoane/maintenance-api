import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { TicketCreateOrConnectWithoutTicketBlockInput } from "../inputs/TicketCreateOrConnectWithoutTicketBlockInput";
import { TicketCreateWithoutTicketBlockInput } from "../inputs/TicketCreateWithoutTicketBlockInput";
import { TicketScalarWhereInput } from "../inputs/TicketScalarWhereInput";
import { TicketUpdateManyWithWhereWithoutTicketBlockInput } from "../inputs/TicketUpdateManyWithWhereWithoutTicketBlockInput";
import { TicketUpdateWithWhereUniqueWithoutTicketBlockInput } from "../inputs/TicketUpdateWithWhereUniqueWithoutTicketBlockInput";
import { TicketUpsertWithWhereUniqueWithoutTicketBlockInput } from "../inputs/TicketUpsertWithWhereUniqueWithoutTicketBlockInput";
import { TicketWhereUniqueInput } from "../inputs/TicketWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TicketUpdateManyWithoutTicketBlockInput {
  @TypeGraphQL.Field(_type => [TicketCreateWithoutTicketBlockInput], {
    nullable: true
  })
  create?: TicketCreateWithoutTicketBlockInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [TicketUpdateWithWhereUniqueWithoutTicketBlockInput], {
    nullable: true
  })
  update?: TicketUpdateWithWhereUniqueWithoutTicketBlockInput[] | undefined;

  @TypeGraphQL.Field(_type => [TicketUpdateManyWithWhereWithoutTicketBlockInput], {
    nullable: true
  })
  updateMany?: TicketUpdateManyWithWhereWithoutTicketBlockInput[] | undefined;

  @TypeGraphQL.Field(_type => [TicketScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TicketScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TicketUpsertWithWhereUniqueWithoutTicketBlockInput], {
    nullable: true
  })
  upsert?: TicketUpsertWithWhereUniqueWithoutTicketBlockInput[] | undefined;

  @TypeGraphQL.Field(_type => [TicketCreateOrConnectWithoutTicketBlockInput], {
    nullable: true
  })
  connectOrCreate?: TicketCreateOrConnectWithoutTicketBlockInput[] | undefined;
}
