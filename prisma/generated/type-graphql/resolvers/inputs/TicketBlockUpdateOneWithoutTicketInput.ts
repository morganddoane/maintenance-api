import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { TicketBlockCreateOrConnectWithoutTicketInput } from "../inputs/TicketBlockCreateOrConnectWithoutTicketInput";
import { TicketBlockCreateWithoutTicketInput } from "../inputs/TicketBlockCreateWithoutTicketInput";
import { TicketBlockUpdateWithoutTicketInput } from "../inputs/TicketBlockUpdateWithoutTicketInput";
import { TicketBlockUpsertWithoutTicketInput } from "../inputs/TicketBlockUpsertWithoutTicketInput";
import { TicketBlockWhereUniqueInput } from "../inputs/TicketBlockWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TicketBlockUpdateOneWithoutTicketInput {
  @TypeGraphQL.Field(_type => TicketBlockCreateWithoutTicketInput, {
    nullable: true
  })
  create?: TicketBlockCreateWithoutTicketInput | undefined;

  @TypeGraphQL.Field(_type => TicketBlockWhereUniqueInput, {
    nullable: true
  })
  connect?: TicketBlockWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => TicketBlockUpdateWithoutTicketInput, {
    nullable: true
  })
  update?: TicketBlockUpdateWithoutTicketInput | undefined;

  @TypeGraphQL.Field(_type => TicketBlockUpsertWithoutTicketInput, {
    nullable: true
  })
  upsert?: TicketBlockUpsertWithoutTicketInput | undefined;

  @TypeGraphQL.Field(_type => TicketBlockCreateOrConnectWithoutTicketInput, {
    nullable: true
  })
  connectOrCreate?: TicketBlockCreateOrConnectWithoutTicketInput | undefined;
}
