import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { Attachment } from "../models/Attachment";
import { Ticket } from "../models/Ticket";
import { TicketBlock } from "../models/TicketBlock";
import { TicketExpense } from "../models/TicketExpense";
import { TicketResponse } from "../models/TicketResponse";
import { UserRole } from "../enums/UserRole";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class User {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => UserRole, {
    nullable: false
  })
  role!: "Admin" | "Manager" | "User";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  first!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  last!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  phone!: string;

  password?: string;

  Ticket?: Ticket[] | null;

  TicketExpense?: TicketExpense[] | null;

  TicketResponse?: TicketResponse[] | null;

  Attachment?: Attachment[] | null;

  TicketBlock?: TicketBlock[] | null;
}
