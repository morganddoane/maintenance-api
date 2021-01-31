import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { TicketResponseOrderByInput } from "../../../inputs/TicketResponseOrderByInput";
import { TicketResponseWhereInput } from "../../../inputs/TicketResponseWhereInput";
import { TicketResponseWhereUniqueInput } from "../../../inputs/TicketResponseWhereUniqueInput";
import { TicketResponseScalarFieldEnum } from "../../../../enums/TicketResponseScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstTicketResponseArgs {
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

  @TypeGraphQL.Field(_type => [TicketResponseScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "createdAt" | "userId" | "story"> | undefined;
}
