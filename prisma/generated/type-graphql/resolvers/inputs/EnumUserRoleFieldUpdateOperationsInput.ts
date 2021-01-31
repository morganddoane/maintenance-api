import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { UserRole } from "../../enums/UserRole";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class EnumUserRoleFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => UserRole, {
    nullable: true
  })
  set?: "Admin" | "Manager" | "User" | undefined;
}
