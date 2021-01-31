import * as TypeGraphQL from "type-graphql";
import { Ticket } from "../../../models/Ticket";
import { TicketResponse } from "../../../models/TicketResponse";
import { User } from "../../../models/User";
import { TicketResponseTicketArgs } from "./args/TicketResponseTicketArgs";

@TypeGraphQL.Resolver(_of => TicketResponse)
export class TicketResponseRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async createdBy(@TypeGraphQL.Root() ticketResponse: TicketResponse, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return ctx.prisma.ticketResponse.findUnique({
      where: {
        id: ticketResponse.id,
      },
    }).createdBy({});
  }

  @TypeGraphQL.FieldResolver(_type => [Ticket], {
    nullable: true
  })
  async Ticket(@TypeGraphQL.Root() ticketResponse: TicketResponse, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: TicketResponseTicketArgs): Promise<Ticket[] | null> {
    return ctx.prisma.ticketResponse.findUnique({
      where: {
        id: ticketResponse.id,
      },
    }).Ticket(args);
  }
}
