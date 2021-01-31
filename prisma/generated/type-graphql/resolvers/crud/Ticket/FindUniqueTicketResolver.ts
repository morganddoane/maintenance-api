import * as TypeGraphQL from "type-graphql";
import { FindUniqueTicketArgs } from "./args/FindUniqueTicketArgs";
import { Ticket } from "../../../models/Ticket";

@TypeGraphQL.Resolver(_of => Ticket)
export class FindUniqueTicketResolver {
  @TypeGraphQL.Query(_returns => Ticket, {
    nullable: true
  })
  async ticket(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueTicketArgs): Promise<Ticket | null> {
    return ctx.prisma.ticket.findUnique(args);
  }
}
