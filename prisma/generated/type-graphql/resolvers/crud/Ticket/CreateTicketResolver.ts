import * as TypeGraphQL from "type-graphql";
import { CreateTicketArgs } from "./args/CreateTicketArgs";
import { Ticket } from "../../../models/Ticket";

@TypeGraphQL.Resolver(_of => Ticket)
export class CreateTicketResolver {
  @TypeGraphQL.Mutation(_returns => Ticket, {
    nullable: false
  })
  async createTicket(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateTicketArgs): Promise<Ticket> {
    return ctx.prisma.ticket.create(args);
  }
}
