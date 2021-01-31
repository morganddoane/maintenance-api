import * as TypeGraphQL from "type-graphql";
import { FindFirstTicketArgs } from "./args/FindFirstTicketArgs";
import { Ticket } from "../../../models/Ticket";

@TypeGraphQL.Resolver(_of => Ticket)
export class FindFirstTicketResolver {
  @TypeGraphQL.Query(_returns => Ticket, {
    nullable: true
  })
  async findFirstTicket(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstTicketArgs): Promise<Ticket | null> {
    return ctx.prisma.ticket.findFirst(args);
  }
}
