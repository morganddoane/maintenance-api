import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { UserRole } from "../../enums/UserRole";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class UserMaxAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt!: Date | null;

  @TypeGraphQL.Field(_type => UserRole, {
    nullable: true
  })
  role!: "Admin" | "Manager" | "User" | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  first!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  last!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  phone!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  password!: string | null;
}
