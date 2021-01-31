import * as TypeGraphQL from "type-graphql";
import { DeleteManyTicketResponseArgs } from "./args/DeleteManyTicketResponseArgs";
import { TicketResponse } from "../../../models/TicketResponse";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => TicketResponse)
export class DeleteManyTicketResponseResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false
  })
  async deleteManyTicketResponse(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyTicketResponseArgs): Promise<BatchPayload> {
    return ctx.prisma.ticketResponse.deleteMany(args);
  }
}
