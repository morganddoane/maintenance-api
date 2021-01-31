import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { TicketCreateOrConnectWithoutTicketBlockInput } from "../inputs/TicketCreateOrConnectWithoutTicketBlockInput";
import { TicketCreateWithoutTicketBlockInput } from "../inputs/TicketCreateWithoutTicketBlockInput";
import { TicketWhereUniqueInput } from "../inputs/TicketWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TicketCreateManyWithoutTicketBlockInput {
  @TypeGraphQL.Field(_type => [TicketCreateWithoutTicketBlockInput], {
    nullable: true
  })
  create?: TicketCreateWithoutTicketBlockInput[] | undefined;

  @TypeGraphQL.Field(_type => [TicketWhereUniqueInput], {
    nullable: true
  })
  connect?: TicketWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TicketCreateOrConnectWithoutTicketBlockInput], {
    nullable: true
  })
  connectOrCreate?: TicketCreateOrConnectWithoutTicketBlockInput[] | undefined;
}
