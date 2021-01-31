import * as TypeGraphQL from "type-graphql";
import { FindUniqueTicketExpenseArgs } from "./args/FindUniqueTicketExpenseArgs";
import { TicketExpense } from "../../../models/TicketExpense";

@TypeGraphQL.Resolver(_of => TicketExpense)
export class FindUniqueTicketExpenseResolver {
  @TypeGraphQL.Query(_returns => TicketExpense, {
    nullable: true
  })
  async ticketExpense(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueTicketExpenseArgs): Promise<TicketExpense | null> {
    return ctx.prisma.ticketExpense.findUnique(args);
  }
}
