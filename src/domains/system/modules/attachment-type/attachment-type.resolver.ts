import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AttachmentTypeService } from './attachment-type.service';
import {
  FindFirstattachmentTypeArgs,
  FindUniqueattachmentTypeArgs,
  FindManyattachmentTypeArgs,
  GroupByattachmentTypeArgs,
  AggregateattachmentTypeArgs,
  CreateOneattachmentTypeArgs,
  CreateManyattachmentTypeArgs,
  UpdateOneattachmentTypeArgs,
  UpdateManyattachmentTypeArgs,
  DeleteOneattachmentTypeArgs,
  DeleteManyattachmentTypeArgs,
  AggregateAttachment_type,
  Attachment_typeGroupBy,
} from '@/shared/prismagraphql/prisma';
import { attachment_type } from '@/shared/prismagraphql/attachment-type';

@Resolver(() => attachment_type)
export class AttachmentTypeResolver {
  constructor(private readonly attachmentTypeService: AttachmentTypeService) {}

  @Query(() => attachment_type, { nullable: true })
  async findFirstAttachmentType(@Args() args: FindFirstattachmentTypeArgs) {
    return this.attachmentTypeService.findFirst(args);
  }

  @Query(() => attachment_type, { nullable: true })
  async findUniqueAttachmentType(@Args() args: FindUniqueattachmentTypeArgs) {
    return this.attachmentTypeService.findUnique(args);
  }

  @Query(() => [attachment_type])
  async findManyAttachmentType(@Args() args: FindManyattachmentTypeArgs) {
    return this.attachmentTypeService.findMany(args);
  }

  @Query(() => [Attachment_typeGroupBy])
  async groupByAttachmentType(@Args() args: GroupByattachmentTypeArgs) {
    return this.attachmentTypeService.groupBy(args);
  }

  @Query(() => AggregateAttachment_type)
  async aggregateAttachmentType(@Args() args: AggregateattachmentTypeArgs) {
    return this.attachmentTypeService.aggregate(args);
  }

  @Mutation(() => attachment_type)
  async createOneAttachmentType(@Args() args: CreateOneattachmentTypeArgs) {
    return this.attachmentTypeService.create(args);
  }

  @Mutation(() => attachment_type)
  async createManyAttachmentType(@Args() args: CreateManyattachmentTypeArgs) {
    return this.attachmentTypeService.createMany(args);
  }

  @Mutation(() => attachment_type, { nullable: true })
  async updateOneAttachmentType(@Args() args: UpdateOneattachmentTypeArgs) {
    return this.attachmentTypeService.update(args);
  }

  @Mutation(() => attachment_type)
  async updateManyAttachmentType(@Args() args: UpdateManyattachmentTypeArgs) {
    return this.attachmentTypeService.updateMany(args);
  }

  @Mutation(() => attachment_type, { nullable: true })
  async deleteOneAttachmentType(@Args() args: DeleteOneattachmentTypeArgs) {
    return this.attachmentTypeService.delete(args);
  }

  @Mutation(() => attachment_type)
  async deleteManyAttachmentType(@Args() args: DeleteManyattachmentTypeArgs) {
    return this.attachmentTypeService.deleteMany(args);
  }
}
