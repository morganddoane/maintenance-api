import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { TicketCreateOrConnectWithoutresponseInput } from "../inputs/TicketCreateOrConnectWithoutresponseInput";
import { TicketCreateWithoutResponseInput } from "../inputs/TicketCreateWithoutResponseInput";
import { TicketWhereUniqueInput } from "../inputs/TicketWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TicketCreateManyWithoutResponseInput {
  @TypeGraphQL.Field(_type => [TicketCreateWithoutResponseInput], {
    nullable: true
  })
  create?: TicketCreateWithoutResponseInput[] | undefined;

  @TypeGraphQL.Field(_type => [TicketWhereUniqueInput], {
    nullable: true
  })
  connect?: TicketWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TicketCreateOrConnectWithoutresponseInput], {
    nullable: true
  })
  connectOrCreate?: TicketCreateOrConnectWithoutresponseInput[] | undefined;
}
