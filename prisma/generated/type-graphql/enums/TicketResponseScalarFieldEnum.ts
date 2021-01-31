import * as TypeGraphQL from "type-graphql";

export enum TicketResponseScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  userId = "userId",
  story = "story"
}
TypeGraphQL.registerEnumType(TicketResponseScalarFieldEnum, {
  name: "TicketResponseScalarFieldEnum",
  description: undefined,
});
