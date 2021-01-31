import * as TypeGraphQL from "type-graphql";
import { CreateTicketExpenseArgs } from "./args/CreateTicketExpenseArgs";
import { TicketExpense } from "../../../models/TicketExpense";

@TypeGraphQL.Resolver(_of => TicketExpense)
export class CreateTicketExpenseResolver {
  @TypeGraphQL.Mutation(_returns => TicketExpense, {
    nullable: false
  })
  async createTicketExpense(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateTicketExpenseArgs): Promise<TicketExpense> {
    return ctx.prisma.ticketExpense.create(args);
  }
}
