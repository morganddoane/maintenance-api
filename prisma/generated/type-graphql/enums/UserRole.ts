import * as TypeGraphQL from "type-graphql";

export enum UserRole {
  Admin = "Admin",
  Manager = "Manager",
  User = "User"
}
TypeGraphQL.registerEnumType(UserRole, {
  name: "UserRole",
  description: undefined,
});
