import * as TypeGraphQL from "type-graphql";

export enum TicketState {
  Pending = "Pending",
  Open = "Open",
  Blocked = "Blocked",
  Compelete = "Compelete",
  Deleted = "Deleted"
}
TypeGraphQL.registerEnumType(TicketState, {
  name: "TicketState",
  description: undefined,
});
