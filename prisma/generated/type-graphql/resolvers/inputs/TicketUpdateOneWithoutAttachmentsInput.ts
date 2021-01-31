import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { TicketCreateOrConnectWithoutattachmentsInput } from "../inputs/TicketCreateOrConnectWithoutattachmentsInput";
import { TicketCreateWithoutAttachmentsInput } from "../inputs/TicketCreateWithoutAttachmentsInput";
import { TicketUpdateWithoutAttachmentsInput } from "../inputs/TicketUpdateWithoutAttachmentsInput";
import { TicketUpsertWithoutAttachmentsInput } from "../inputs/TicketUpsertWithoutAttachmentsInput";
import { TicketWhereUniqueInput } from "../inputs/TicketWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TicketUpdateOneWithoutAttachmentsInput {
  @TypeGraphQL.Field(_type => TicketCreateWithoutAttachmentsInput, {
    nullable: true
  })
  create?: TicketCreateWithoutAttachmentsInput | undefined;

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

  @TypeGraphQL.Field(_type => TicketUpdateWithoutAttachmentsInput, {
    nullable: true
  })
  update?: TicketUpdateWithoutAttachmentsInput | undefined;

  @TypeGraphQL.Field(_type => TicketUpsertWithoutAttachmentsInput, {
    nullable: true
  })
  upsert?: TicketUpsertWithoutAttachmentsInput | undefined;

  @TypeGraphQL.Field(_type => TicketCreateOrConnectWithoutattachmentsInput, {
    nullable: true
  })
  connectOrCreate?: TicketCreateOrConnectWithoutattachmentsInput | undefined;
}
