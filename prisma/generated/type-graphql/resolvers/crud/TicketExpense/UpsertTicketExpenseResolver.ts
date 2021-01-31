import * as TypeGraphQL from "type-graphql";
import { UpsertTicketExpenseArgs } from "./args/UpsertTicketExpenseArgs";
import { TicketExpense } from "../../../models/TicketExpense";

@TypeGraphQL.Resolver(_of => TicketExpense)
export class UpsertTicketExpenseResolver {
  @TypeGraphQL.Mutation(_returns => TicketExpense, {
    nullable: false
  })
  async upsertTicketExpense(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertTicketExpenseArgs): Promise<TicketExpense> {
    return ctx.prisma.ticketExpense.upsert(args);
  }
}
