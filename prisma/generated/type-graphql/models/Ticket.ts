import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { Attachment } from "../models/Attachment";
import { TicketBlock } from "../models/TicketBlock";
import { TicketExpense } from "../models/TicketExpense";
import { TicketResponse } from "../models/TicketResponse";
import { User } from "../models/User";
import { TicketState } from "../enums/TicketState";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class Ticket {
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

  createdBy?: User;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  userId!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  note!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  due?: Date | null;

  expenses?: TicketExpense[] | null;

  response?: TicketResponse | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  ticketResponseId?: number | null;

  @TypeGraphQL.Field(_type => TicketState, {
    nullable: false
  })
  state!: "Pending" | "Open" | "Blocked" | "Compelete" | "Deleted";

  @TypeGraphQL.Field(_type => [String], {
    nullable: true
  })
  seenBy?: string[] | null;

  attachments?: Attachment[] | null;

  TicketBlock?: TicketBlock | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  ticketBlockId?: number | null;

  @TypeGraphQL.Field(_type => [String], {
    nullable: true
  })
  tags?: string[] | null;
}
