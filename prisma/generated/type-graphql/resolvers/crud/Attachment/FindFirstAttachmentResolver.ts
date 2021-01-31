import * as TypeGraphQL from "type-graphql";
import { FindFirstAttachmentArgs } from "./args/FindFirstAttachmentArgs";
import { Attachment } from "../../../models/Attachment";

@TypeGraphQL.Resolver(_of => Attachment)
export class FindFirstAttachmentResolver {
  @TypeGraphQL.Query(_returns => Attachment, {
    nullable: true
  })
  async findFirstAttachment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstAttachmentArgs): Promise<Attachment | null> {
    return ctx.prisma.attachment.findFirst(args);
  }
}
