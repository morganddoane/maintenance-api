import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { TicketBlockCreateOrConnectWithoutcreatedByInput } from "../inputs/TicketBlockCreateOrConnectWithoutcreatedByInput";
import { TicketBlockCreateWithoutCreatedByInput } from "../inputs/TicketBlockCreateWithoutCreatedByInput";
import { TicketBlockWhereUniqueInput } from "../inputs/TicketBlockWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TicketBlockCreateManyWithoutCreatedByInput {
  @TypeGraphQL.Field(_type => [TicketBlockCreateWithoutCreatedByInput], {
    nullable: true
  })
  create?: TicketBlockCreateWithoutCreatedByInput[] | undefined;

  @TypeGraphQL.Field(_type => [TicketBlockWhereUniqueInput], {
    nullable: true
  })
  connect?: TicketBlockWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TicketBlockCreateOrConnectWithoutcreatedByInput], {
    nullable: true
  })
  connectOrCreate?: TicketBlockCreateOrConnectWithoutcreatedByInput[] | undefined;
}
