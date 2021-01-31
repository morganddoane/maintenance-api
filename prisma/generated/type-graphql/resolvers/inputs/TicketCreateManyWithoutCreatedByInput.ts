import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { TicketCreateOrConnectWithoutcreatedByInput } from "../inputs/TicketCreateOrConnectWithoutcreatedByInput";
import { TicketCreateWithoutCreatedByInput } from "../inputs/TicketCreateWithoutCreatedByInput";
import { TicketWhereUniqueInput } from "../inputs/TicketWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TicketCreateManyWithoutCreatedByInput {
  @TypeGraphQL.Field(_type => [TicketCreateWithoutCreatedByInput], {
    nullable: true
  })
  create?: TicketCreateWithoutCreatedByInput[] | undefined;

  @TypeGraphQL.Field(_type => [TicketWhereUniqueInput], {
    nullable: true
  })
  connect?: TicketWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TicketCreateOrConnectWithoutcreatedByInput], {
    nullable: true
  })
  connectOrCreate?: TicketCreateOrConnectWithoutcreatedByInput[] | undefined;
}
