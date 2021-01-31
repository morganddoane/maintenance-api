import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateTicketArgs } from "./args/AggregateTicketArgs";
import { CreateTicketArgs } from "./args/CreateTicketArgs";
import { DeleteManyTicketArgs } from "./args/DeleteManyTicketArgs";
import { DeleteTicketArgs } from "./args/DeleteTicketArgs";
import { FindFirstTicketArgs } from "./args/FindFirstTicketArgs";
import { FindManyTicketArgs } from "./args/FindManyTicketArgs";
import { FindUniqueTicketArgs } from "./args/FindUniqueTicketArgs";
import { UpdateManyTicketArgs } from "./args/UpdateManyTicketArgs";
import { UpdateTicketArgs } from "./args/UpdateTicketArgs";
import { UpsertTicketArgs } from "./args/UpsertTicketArgs";
import { Ticket } from "../../../models/Ticket";
import { AggregateTicket } from "../../outputs/AggregateTicket";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Ticket)
export class TicketCrudResolver {
  @TypeGraphQL.Query(_returns => Ticket, {
    nullable: true
  })
  async ticket(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueTicketArgs): Promise<Ticket | null> {
    return ctx.prisma.ticket.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => Ticket, {
    nullable: true
  })
  async findFirstTicket(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstTicketArgs): Promise<Ticket | null> {
    return ctx.prisma.ticket.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [Ticket], {
    nullable: false
  })
  async tickets(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyTicketArgs): Promise<Ticket[]> {
    return ctx.prisma.ticket.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Ticket, {
    nullable: false
  })
  async createTicket(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateTicketArgs): Promise<Ticket> {
    return ctx.prisma.ticket.create(args);
  }

  @TypeGraphQL.Mutation(_returns => Ticket, {
    nullable: true
  })
  async deleteTicket(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteTicketArgs): Promise<Ticket | null> {
    return ctx.prisma.ticket.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => Ticket, {
    nullable: true
  })
  async updateTicket(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateTicketArgs): Promise<Ticket | null> {
    return ctx.prisma.ticket.update(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false
  })
  async deleteManyTicket(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyTicketArgs): Promise<BatchPayload> {
    return ctx.prisma.ticket.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false
  })
  async updateManyTicket(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyTicketArgs): Promise<BatchPayload> {
    return ctx.prisma.ticket.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Ticket, {
    nullable: false
  })
  async upsertTicket(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertTicketArgs): Promise<Ticket> {
    return ctx.prisma.ticket.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateTicket, {
    nullable: false
  })
  async aggregateTicket(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTicketArgs): Promise<AggregateTicket> {
    function transformFields(fields: Record<string, any>): Record<string, any> {
      return Object.fromEntries(
        Object.entries(fields)
          // remove __typename and others
          .filter(([key, value]) => !key.startsWith("__"))
          .map<[string, any]>(([key, value]) => {
            if (Object.keys(value).length === 0) {
              return [key, true];
            }
            return [key, transformFields(value)];
          }),
      );
    }

    return ctx.prisma.ticket.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
