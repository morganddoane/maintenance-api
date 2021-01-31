import * as TypeGraphQL from "type-graphql";
import { FindManyAttachmentArgs } from "./args/FindManyAttachmentArgs";
import { Attachment } from "../../../models/Attachment";

@TypeGraphQL.Resolver(_of => Attachment)
export class FindManyAttachmentResolver {
  @TypeGraphQL.Query(_returns => [Attachment], {
    nullable: false
  })
  async attachments(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyAttachmentArgs): Promise<Attachment[]> {
    return ctx.prisma.attachment.findMany(args);
  }
}
