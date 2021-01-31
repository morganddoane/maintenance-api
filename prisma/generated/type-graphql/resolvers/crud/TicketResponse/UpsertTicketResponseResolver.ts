import * as TypeGraphQL from "type-graphql";
import { UpsertTicketResponseArgs } from "./args/UpsertTicketResponseArgs";
import { TicketResponse } from "../../../models/TicketResponse";

@TypeGraphQL.Resolver(_of => TicketResponse)
export class UpsertTicketResponseResolver {
  @TypeGraphQL.Mutation(_returns => TicketResponse, {
    nullable: false
  })
  async upsertTicketResponse(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertTicketResponseArgs): Promise<TicketResponse> {
    return ctx.prisma.ticketResponse.upsert(args);
  }
}
