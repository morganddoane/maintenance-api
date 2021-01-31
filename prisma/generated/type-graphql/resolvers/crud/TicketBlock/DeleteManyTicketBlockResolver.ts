import * as TypeGraphQL from "type-graphql";
import { DeleteManyTicketBlockArgs } from "./args/DeleteManyTicketBlockArgs";
import { TicketBlock } from "../../../models/TicketBlock";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => TicketBlock)
export class DeleteManyTicketBlockResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false
  })
  async deleteManyTicketBlock(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyTicketBlockArgs): Promise<BatchPayload> {
    return ctx.prisma.ticketBlock.deleteMany(args);
  }
}
