import * as TypeGraphQL from "type-graphql";

export enum TicketExpenseScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  userId = "userId",
  ticketId = "ticketId",
  dollars = "dollars",
  description = "description"
}
TypeGraphQL.registerEnumType(TicketExpenseScalarFieldEnum, {
  name: "TicketExpenseScalarFieldEnum",
  description: undefined,
});
