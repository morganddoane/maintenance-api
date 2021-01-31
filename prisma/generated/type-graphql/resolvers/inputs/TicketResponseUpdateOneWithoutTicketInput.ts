import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { TicketResponseCreateOrConnectWithoutTicketInput } from "../inputs/TicketResponseCreateOrConnectWithoutTicketInput";
import { TicketResponseCreateWithoutTicketInput } from "../inputs/TicketResponseCreateWithoutTicketInput";
import { TicketResponseUpdateWithoutTicketInput } from "../inputs/TicketResponseUpdateWithoutTicketInput";
import { TicketResponseUpsertWithoutTicketInput } from "../inputs/TicketResponseUpsertWithoutTicketInput";
import { TicketResponseWhereUniqueInput } from "../inputs/TicketResponseWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TicketResponseUpdateOneWithoutTicketInput {
  @TypeGraphQL.Field(_type => TicketResponseCreateWithoutTicketInput, {
    nullable: true
  })
  create?: TicketResponseCreateWithoutTicketInput | undefined;

  @TypeGraphQL.Field(_type => TicketResponseWhereUniqueInput, {
    nullable: true
  })
  connect?: TicketResponseWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => TicketResponseUpdateWithoutTicketInput, {
    nullable: true
  })
  update?: TicketResponseUpdateWithoutTicketInput | undefined;

  @TypeGraphQL.Field(_type => TicketResponseUpsertWithoutTicketInput, {
    nullable: true
  })
  upsert?: TicketResponseUpsertWithoutTicketInput | undefined;

  @TypeGraphQL.Field(_type => TicketResponseCreateOrConnectWithoutTicketInput, {
    nullable: true
  })
  connectOrCreate?: TicketResponseCreateOrConnectWithoutTicketInput | undefined;
}
