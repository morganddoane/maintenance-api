import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AttachmentMinAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt!: Date | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  userId!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  ticketId!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  url!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  title!: string | null;
}
