import * as TypeGraphQL from "type-graphql";

export enum TicketBlockScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  userId = "userId",
  story = "story"
}
TypeGraphQL.registerEnumType(TicketBlockScalarFieldEnum, {
  name: "TicketBlockScalarFieldEnum",
  description: undefined,
});
