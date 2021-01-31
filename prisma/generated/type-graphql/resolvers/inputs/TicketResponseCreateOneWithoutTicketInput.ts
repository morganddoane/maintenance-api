import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { TicketResponseCreateOrConnectWithoutTicketInput } from "../inputs/TicketResponseCreateOrConnectWithoutTicketInput";
import { TicketResponseCreateWithoutTicketInput } from "../inputs/TicketResponseCreateWithoutTicketInput";
import { TicketResponseWhereUniqueInput } from "../inputs/TicketResponseWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TicketResponseCreateOneWithoutTicketInput {
  @TypeGraphQL.Field(_type => TicketResponseCreateWithoutTicketInput, {
    nullable: true
  })
  create?: TicketResponseCreateWithoutTicketInput | undefined;

  @TypeGraphQL.Field(_type => TicketResponseWhereUniqueInput, {
    nullable: true
  })
  connect?: TicketResponseWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TicketResponseCreateOrConnectWithoutTicketInput, {
    nullable: true
  })
  connectOrCreate?: TicketResponseCreateOrConnectWithoutTicketInput | undefined;
}
