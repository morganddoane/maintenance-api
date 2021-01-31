import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { TicketExpenseOrderByInput } from "../../../inputs/TicketExpenseOrderByInput";
import { TicketExpenseWhereInput } from "../../../inputs/TicketExpenseWhereInput";
import { TicketExpenseWhereUniqueInput } from "../../../inputs/TicketExpenseWhereUniqueInput";
import { TicketExpenseScalarFieldEnum } from "../../../../enums/TicketExpenseScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class UserTicketExpenseArgs {
  @TypeGraphQL.Field(_type => TicketExpenseWhereInput, {
    nullable: true
  })
  where?: TicketExpenseWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TicketExpenseOrderByInput], {
    nullable: true
  })
  orderBy?: TicketExpenseOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => TicketExpenseWhereUniqueInput, {
    nullable: true
  })
  cursor?: TicketExpenseWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [TicketExpenseScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "createdAt" | "userId" | "ticketId" | "dollars" | "description"> | undefined;
}
