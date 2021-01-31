import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateTicketExpenseArgs } from "./args/AggregateTicketExpenseArgs";
import { CreateTicketExpenseArgs } from "./args/CreateTicketExpenseArgs";
import { DeleteManyTicketExpenseArgs } from "./args/DeleteManyTicketExpenseArgs";
import { DeleteTicketExpenseArgs } from "./args/DeleteTicketExpenseArgs";
import { FindFirstTicketExpenseArgs } from "./args/FindFirstTicketExpenseArgs";
import { FindManyTicketExpenseArgs } from "./args/FindManyTicketExpenseArgs";
import { FindUniqueTicketExpenseArgs } from "./args/FindUniqueTicketExpenseArgs";
import { UpdateManyTicketExpenseArgs } from "./args/UpdateManyTicketExpenseArgs";
import { UpdateTicketExpenseArgs } from "./args/UpdateTicketExpenseArgs";
import { UpsertTicketExpenseArgs } from "./args/UpsertTicketExpenseArgs";
import { TicketExpense } from "../../../models/TicketExpense";
import { AggregateTicketExpense } from "../../outputs/AggregateTicketExpense";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => TicketExpense)
export class TicketExpenseCrudResolver {
  @TypeGraphQL.Query(_returns => TicketExpense, {
    nullable: true
  })
  async ticketExpense(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueTicketExpenseArgs): Promise<TicketExpense | null> {
    return ctx.prisma.ticketExpense.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => TicketExpense, {
    nullable: true
  })
  async findFirstTicketExpense(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstTicketExpenseArgs): Promise<TicketExpense | null> {
    return ctx.prisma.ticketExpense.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [TicketExpense], {
    nullable: false
  })
  async ticketExpenses(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyTicketExpenseArgs): Promise<TicketExpense[]> {
    return ctx.prisma.ticketExpense.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => TicketExpense, {
    nullable: false
  })
  async createTicketExpense(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateTicketExpenseArgs): Promise<TicketExpense> {
    return ctx.prisma.ticketExpense.create(args);
  }

  @TypeGraphQL.Mutation(_returns => TicketExpense, {
    nullable: true
  })
  async deleteTicketExpense(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteTicketExpenseArgs): Promise<TicketExpense | null> {
    return ctx.prisma.ticketExpense.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => TicketExpense, {
    nullable: true
  })
  async updateTicketExpense(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateTicketExpenseArgs): Promise<TicketExpense | null> {
    return ctx.prisma.ticketExpense.update(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false
  })
  async deleteManyTicketExpense(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyTicketExpenseArgs): Promise<BatchPayload> {
    return ctx.prisma.ticketExpense.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false
  })
  async updateManyTicketExpense(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyTicketExpenseArgs): Promise<BatchPayload> {
    return ctx.prisma.ticketExpense.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => TicketExpense, {
    nullable: false
  })
  async upsertTicketExpense(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertTicketExpenseArgs): Promise<TicketExpense> {
    return ctx.prisma.ticketExpense.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateTicketExpense, {
    nullable: false
  })
  async aggregateTicketExpense(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTicketExpenseArgs): Promise<AggregateTicketExpense> {
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

    return ctx.prisma.ticketExpense.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
