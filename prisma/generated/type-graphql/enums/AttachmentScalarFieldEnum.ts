import * as TypeGraphQL from "type-graphql";

export enum AttachmentScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  userId = "userId",
  ticketId = "ticketId",
  url = "url",
  title = "title"
}
TypeGraphQL.registerEnumType(AttachmentScalarFieldEnum, {
  name: "AttachmentScalarFieldEnum",
  description: undefined,
});
