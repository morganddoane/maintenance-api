import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { TicketBlockCreateOrConnectWithoutTicketInput } from "../inputs/TicketBlockCreateOrConnectWithoutTicketInput";
import { TicketBlockCreateWithoutTicketInput } from "../inputs/TicketBlockCreateWithoutTicketInput";
import { TicketBlockWhereUniqueInput } from "../inputs/TicketBlockWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TicketBlockCreateOneWithoutTicketInput {
  @TypeGraphQL.Field(_type => TicketBlockCreateWithoutTicketInput, {
    nullable: true
  })
  create?: TicketBlockCreateWithoutTicketInput | undefined;

  @TypeGraphQL.Field(_type => TicketBlockWhereUniqueInput, {
    nullable: true
  })
  connect?: TicketBlockWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TicketBlockCreateOrConnectWithoutTicketInput, {
    nullable: true
  })
  connectOrCreate?: TicketBlockCreateOrConnectWithoutTicketInput | undefined;
}
