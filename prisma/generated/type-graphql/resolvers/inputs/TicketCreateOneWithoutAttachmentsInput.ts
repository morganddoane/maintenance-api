import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { TicketCreateOrConnectWithoutattachmentsInput } from "../inputs/TicketCreateOrConnectWithoutattachmentsInput";
import { TicketCreateWithoutAttachmentsInput } from "../inputs/TicketCreateWithoutAttachmentsInput";
import { TicketWhereUniqueInput } from "../inputs/TicketWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TicketCreateOneWithoutAttachmentsInput {
  @TypeGraphQL.Field(_type => TicketCreateWithoutAttachmentsInput, {
    nullable: true
  })
  create?: TicketCreateWithoutAttachmentsInput | undefined;

  @TypeGraphQL.Field(_type => TicketWhereUniqueInput, {
    nullable: true
  })
  connect?: TicketWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TicketCreateOrConnectWithoutattachmentsInput, {
    nullable: true
  })
  connectOrCreate?: TicketCreateOrConnectWithoutattachmentsInput | undefined;
}
