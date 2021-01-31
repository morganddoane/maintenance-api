import * as TypeGraphQL from "type-graphql";
import { FindManyTicketArgs } from "./args/FindManyTicketArgs";
import { Ticket } from "../../../models/Ticket";

@TypeGraphQL.Resolver(_of => Ticket)
export class FindManyTicketResolver {
  @TypeGraphQL.Query(_returns => [Ticket], {
    nullable: false
  })
  async tickets(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyTicketArgs): Promise<Ticket[]> {
    return ctx.prisma.ticket.findMany(args);
  }
}
