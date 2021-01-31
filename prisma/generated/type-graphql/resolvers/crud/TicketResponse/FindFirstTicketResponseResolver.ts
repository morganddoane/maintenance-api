import * as TypeGraphQL from "type-graphql";
import { FindFirstTicketResponseArgs } from "./args/FindFirstTicketResponseArgs";
import { TicketResponse } from "../../../models/TicketResponse";

@TypeGraphQL.Resolver(_of => TicketResponse)
export class FindFirstTicketResponseResolver {
  @TypeGraphQL.Query(_returns => TicketResponse, {
    nullable: true
  })
  async findFirstTicketResponse(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstTicketResponseArgs): Promise<TicketResponse | null> {
    return ctx.prisma.ticketResponse.findFirst(args);
  }
}
