import * as TypeGraphQL from "type-graphql";
import { FindUniqueTicketResponseArgs } from "./args/FindUniqueTicketResponseArgs";
import { TicketResponse } from "../../../models/TicketResponse";

@TypeGraphQL.Resolver(_of => TicketResponse)
export class FindUniqueTicketResponseResolver {
  @TypeGraphQL.Query(_returns => TicketResponse, {
    nullable: true
  })
  async ticketResponse(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueTicketResponseArgs): Promise<TicketResponse | null> {
    return ctx.prisma.ticketResponse.findUnique(args);
  }
}
