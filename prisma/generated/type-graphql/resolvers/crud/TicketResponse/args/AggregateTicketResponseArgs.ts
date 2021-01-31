import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { TicketResponseOrderByInput } from "../../../inputs/TicketResponseOrderByInput";
import { TicketResponseWhereInput } from "../../../inputs/TicketResponseWhereInput";
import { TicketResponseWhereUniqueInput } from "../../../inputs/TicketResponseWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateTicketResponseArgs {
  @TypeGraphQL.Field(_type => TicketResponseWhereInput, {
    nullable: true
  })
  where?: TicketResponseWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TicketResponseOrderByInput], {
    nullable: true
  })
  orderBy?: TicketResponseOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => TicketResponseWhereUniqueInput, {
    nullable: true
  })
  cursor?: TicketResponseWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
