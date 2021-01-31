import * as TypeGraphQL from "type-graphql";
import { DeleteAttachmentArgs } from "./args/DeleteAttachmentArgs";
import { Attachment } from "../../../models/Attachment";

@TypeGraphQL.Resolver(_of => Attachment)
export class DeleteAttachmentResolver {
  @TypeGraphQL.Mutation(_returns => Attachment, {
    nullable: true
  })
  async deleteAttachment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteAttachmentArgs): Promise<Attachment | null> {
    return ctx.prisma.attachment.delete(args);
  }
}
