import * as TypeGraphQL from "type-graphql";
import { DeleteManyAttachmentArgs } from "./args/DeleteManyAttachmentArgs";
import { Attachment } from "../../../models/Attachment";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Attachment)
export class DeleteManyAttachmentResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false
  })
  async deleteManyAttachment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyAttachmentArgs): Promise<BatchPayload> {
    return ctx.prisma.attachment.deleteMany(args);
  }
}
