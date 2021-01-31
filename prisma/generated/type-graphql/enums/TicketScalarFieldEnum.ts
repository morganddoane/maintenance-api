import * as TypeGraphQL from "type-graphql";

export enum TicketScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  userId = "userId",
  title = "title",
  note = "note",
  due = "due",
  ticketResponseId = "ticketResponseId",
  state = "state",
  seenBy = "seenBy",
  ticketBlockId = "ticketBlockId",
  tags = "tags"
}
TypeGraphQL.registerEnumType(TicketScalarFieldEnum, {
  name: "TicketScalarFieldEnum",
  description: undefined,
});
