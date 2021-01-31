import * as TypeGraphQL from "type-graphql";
import { DeleteTicketArgs } from "./args/DeleteTicketArgs";
import { Ticket } from "../../../models/Ticket";

@TypeGraphQL.Resolver(_of => Ticket)
export class DeleteTicketResolver {
  @TypeGraphQL.Mutation(_returns => Ticket, {
    nullable: true
  })
  async deleteTicket(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteTicketArgs): Promise<Ticket | null> {
    return ctx.prisma.ticket.delete(args);
  }
}
