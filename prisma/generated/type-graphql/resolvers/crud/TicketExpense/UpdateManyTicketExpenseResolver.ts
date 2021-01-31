import * as TypeGraphQL from "type-graphql";
import { UpdateManyTicketExpenseArgs } from "./args/UpdateManyTicketExpenseArgs";
import { TicketExpense } from "../../../models/TicketExpense";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => TicketExpense)
export class UpdateManyTicketExpenseResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false
  })
  async updateManyTicketExpense(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyTicketExpenseArgs): Promise<BatchPayload> {
    return ctx.prisma.ticketExpense.updateMany(args);
  }
}
