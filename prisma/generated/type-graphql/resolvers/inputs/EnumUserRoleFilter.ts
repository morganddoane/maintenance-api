import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { NestedEnumUserRoleFilter } from "../inputs/NestedEnumUserRoleFilter";
import { UserRole } from "../../enums/UserRole";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class EnumUserRoleFilter {
  @TypeGraphQL.Field(_type => UserRole, {
    nullable: true
  })
  equals?: "Admin" | "Manager" | "User" | undefined;

  @TypeGraphQL.Field(_type => [UserRole], {
    nullable: true
  })
  in?: Array<"Admin" | "Manager" | "User"> | undefined;

  @TypeGraphQL.Field(_type => [UserRole], {
    nullable: true
  })
  notIn?: Array<"Admin" | "Manager" | "User"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumUserRoleFilter, {
    nullable: true
  })
  not?: NestedEnumUserRoleFilter | undefined;
}
