import * as TypeGraphQL from "type-graphql";
import { UpsertAttachmentArgs } from "./args/UpsertAttachmentArgs";
import { Attachment } from "../../../models/Attachment";

@TypeGraphQL.Resolver(_of => Attachment)
export class UpsertAttachmentResolver {
  @TypeGraphQL.Mutation(_returns => Attachment, {
    nullable: false
  })
  async upsertAttachment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertAttachmentArgs): Promise<Attachment> {
    return ctx.prisma.attachment.upsert(args);
  }
}
