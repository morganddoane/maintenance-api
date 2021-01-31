import * as TypeGraphQL from "type-graphql";
import { UpsertTicketArgs } from "./args/UpsertTicketArgs";
import { Ticket } from "../../../models/Ticket";

@TypeGraphQL.Resolver(_of => Ticket)
export class UpsertTicketResolver {
  @TypeGraphQL.Mutation(_returns => Ticket, {
    nullable: false
  })
  async upsertTicket(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertTicketArgs): Promise<Ticket> {
    return ctx.prisma.ticket.upsert(args);
  }
}
