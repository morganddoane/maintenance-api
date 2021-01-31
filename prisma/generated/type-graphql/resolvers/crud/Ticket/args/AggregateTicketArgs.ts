import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { TicketOrderByInput } from "../../../inputs/TicketOrderByInput";
import { TicketWhereInput } from "../../../inputs/TicketWhereInput";
import { TicketWhereUniqueInput } from "../../../inputs/TicketWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateTicketArgs {
  @TypeGraphQL.Field(_type => TicketWhereInput, {
    nullable: true
  })
  where?: TicketWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TicketOrderByInput], {
    nullable: true
  })
  orderBy?: TicketOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => TicketWhereUniqueInput, {
    nullable: true
  })
  cursor?: TicketWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
