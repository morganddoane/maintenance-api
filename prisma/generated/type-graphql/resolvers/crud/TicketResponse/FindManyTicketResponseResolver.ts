import * as TypeGraphQL from "type-graphql";
import { FindManyTicketResponseArgs } from "./args/FindManyTicketResponseArgs";
import { TicketResponse } from "../../../models/TicketResponse";

@TypeGraphQL.Resolver(_of => TicketResponse)
export class FindManyTicketResponseResolver {
  @TypeGraphQL.Query(_returns => [TicketResponse], {
    nullable: false
  })
  async ticketResponses(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyTicketResponseArgs): Promise<TicketResponse[]> {
    return ctx.prisma.ticketResponse.findMany(args);
  }
}
