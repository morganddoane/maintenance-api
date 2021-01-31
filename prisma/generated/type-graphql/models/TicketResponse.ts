import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { Ticket } from "../models/Ticket";
import { User } from "../models/User";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class TicketResponse {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  createdBy?: User;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  userId!: number;

  Ticket?: Ticket[] | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  story!: string;
}
