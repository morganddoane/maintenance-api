import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { TicketResponseCreateWithoutCreatedByInput } from "../inputs/TicketResponseCreateWithoutCreatedByInput";
import { TicketResponseWhereUniqueInput } from "../inputs/TicketResponseWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TicketResponseCreateOrConnectWithoutcreatedByInput {
  @TypeGraphQL.Field(_type => TicketResponseWhereUniqueInput, {
    nullable: false
  })
  where!: TicketResponseWhereUniqueInput;

  @TypeGraphQL.Field(_type => TicketResponseCreateWithoutCreatedByInput, {
    nullable: false
  })
  create!: TicketResponseCreateWithoutCreatedByInput;
}
