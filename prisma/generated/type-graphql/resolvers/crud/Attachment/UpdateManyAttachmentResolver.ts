import * as TypeGraphQL from "type-graphql";
import { UpdateManyAttachmentArgs } from "./args/UpdateManyAttachmentArgs";
import { Attachment } from "../../../models/Attachment";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Attachment)
export class UpdateManyAttachmentResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false
  })
  async updateManyAttachment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyAttachmentArgs): Promise<BatchPayload> {
    return ctx.prisma.attachment.updateMany(args);
  }
}
