import * as TypeGraphQL from "type-graphql";
import { CreateAttachmentArgs } from "./args/CreateAttachmentArgs";
import { Attachment } from "../../../models/Attachment";

@TypeGraphQL.Resolver(_of => Attachment)
export class CreateAttachmentResolver {
  @TypeGraphQL.Mutation(_returns => Attachment, {
    nullable: false
  })
  async createAttachment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateAttachmentArgs): Promise<Attachment> {
    return ctx.prisma.attachment.create(args);
  }
}
