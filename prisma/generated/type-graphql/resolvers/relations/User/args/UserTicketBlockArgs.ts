import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { TicketBlockOrderByInput } from "../../../inputs/TicketBlockOrderByInput";
import { TicketBlockWhereInput } from "../../../inputs/TicketBlockWhereInput";
import { TicketBlockWhereUniqueInput } from "../../../inputs/TicketBlockWhereUniqueInput";
import { TicketBlockScalarFieldEnum } from "../../../../enums/TicketBlockScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class UserTicketBlockArgs {
  @TypeGraphQL.Field(_type => TicketBlockWhereInput, {
    nullable: true
  })
  where?: TicketBlockWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TicketBlockOrderByInput], {
    nullable: true
  })
  orderBy?: TicketBlockOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => TicketBlockWhereUniqueInput, {
    nullable: true
  })
  cursor?: TicketBlockWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [TicketBlockScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "createdAt" | "userId" | "story"> | undefined;
}
