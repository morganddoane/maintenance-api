import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { TicketResponseCreateOrConnectWithoutcreatedByInput } from "../inputs/TicketResponseCreateOrConnectWithoutcreatedByInput";
import { TicketResponseCreateWithoutCreatedByInput } from "../inputs/TicketResponseCreateWithoutCreatedByInput";
import { TicketResponseWhereUniqueInput } from "../inputs/TicketResponseWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TicketResponseCreateManyWithoutCreatedByInput {
  @TypeGraphQL.Field(_type => [TicketResponseCreateWithoutCreatedByInput], {
    nullable: true
  })
  create?: TicketResponseCreateWithoutCreatedByInput[] | undefined;

  @TypeGraphQL.Field(_type => [TicketResponseWhereUniqueInput], {
    nullable: true
  })
  connect?: TicketResponseWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TicketResponseCreateOrConnectWithoutcreatedByInput], {
    nullable: true
  })
  connectOrCreate?: TicketResponseCreateOrConnectWithoutcreatedByInput[] | undefined;
}
