import * as TypeGraphQL from "type-graphql";
import { UpdateAttachmentArgs } from "./args/UpdateAttachmentArgs";
import { Attachment } from "../../../models/Attachment";

@TypeGraphQL.Resolver(_of => Attachment)
export class UpdateAttachmentResolver {
  @TypeGraphQL.Mutation(_returns => Attachment, {
    nullable: true
  })
  async updateAttachment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateAttachmentArgs): Promise<Attachment | null> {
    return ctx.prisma.attachment.update(args);
  }
}
