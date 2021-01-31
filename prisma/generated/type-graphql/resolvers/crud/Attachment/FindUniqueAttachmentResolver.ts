import * as TypeGraphQL from "type-graphql";
import { FindUniqueAttachmentArgs } from "./args/FindUniqueAttachmentArgs";
import { Attachment } from "../../../models/Attachment";

@TypeGraphQL.Resolver(_of => Attachment)
export class FindUniqueAttachmentResolver {
  @TypeGraphQL.Query(_returns => Attachment, {
    nullable: true
  })
  async attachment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueAttachmentArgs): Promise<Attachment | null> {
    return ctx.prisma.attachment.findUnique(args);
  }
}
