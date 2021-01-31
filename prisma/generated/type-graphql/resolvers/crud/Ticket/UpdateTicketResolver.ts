import * as TypeGraphQL from "type-graphql";
import { UpdateTicketArgs } from "./args/UpdateTicketArgs";
import { Ticket } from "../../../models/Ticket";

@TypeGraphQL.Resolver(_of => Ticket)
export class UpdateTicketResolver {
  @TypeGraphQL.Mutation(_returns => Ticket, {
    nullable: true
  })
  async updateTicket(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateTicketArgs): Promise<Ticket | null> {
    return ctx.prisma.ticket.update(args);
  }
}
