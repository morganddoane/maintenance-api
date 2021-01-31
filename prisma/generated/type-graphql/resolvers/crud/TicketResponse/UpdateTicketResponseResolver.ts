import * as TypeGraphQL from "type-graphql";
import { UpdateTicketResponseArgs } from "./args/UpdateTicketResponseArgs";
import { TicketResponse } from "../../../models/TicketResponse";

@TypeGraphQL.Resolver(_of => TicketResponse)
export class UpdateTicketResponseResolver {
  @TypeGraphQL.Mutation(_returns => TicketResponse, {
    nullable: true
  })
  async updateTicketResponse(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateTicketResponseArgs): Promise<TicketResponse | null> {
    return ctx.prisma.ticketResponse.update(args);
  }
}
