import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PostAuditLogService } from './post-audit-log.service';
import { post_audit_log } from '@/shared/prismagraphql/post-audit-log';
import {
  AggregatePost_audit_log,
  Post_audit_logGroupBy,
  FindFirstpostAuditLogArgs,
  FindUniquepostAuditLogArgs,
  FindManypostAuditLogArgs,
  GroupBypostAuditLogArgs,
  AggregatepostAuditLogArgs,
  CreateOnepostAuditLogArgs,
  CreateManypostAuditLogArgs,
  UpdateOnepostAuditLogArgs,
  UpdateManypostAuditLogArgs,
  DeleteOnepostAuditLogArgs,
  DeleteManypostAuditLogArgs,
} from '@/shared/prismagraphql/prisma';

@Resolver(() => post_audit_log)
export class PostAuditLogResolver {
  constructor(private readonly postAuditLogService: PostAuditLogService) {}

  @Query(() => post_audit_log, { nullable: true })
  async findFirstPostAuditLog(@Args() args: FindFirstpostAuditLogArgs) {
    return this.postAuditLogService.findFirst(args);
  }

  @Query(() => post_audit_log, { nullable: true })
  async findUniquePostAuditLog(@Args() args: FindUniquepostAuditLogArgs) {
    return this.postAuditLogService.findUnique(args);
  }

  @Query(() => [post_audit_log])
  async findManyPostAuditLog(@Args() args: FindManypostAuditLogArgs) {
    return this.postAuditLogService.findMany(args);
  }

  @Query(() => [Post_audit_logGroupBy])
  async groupByPostAuditLog(@Args() args: GroupBypostAuditLogArgs) {
    return this.postAuditLogService.groupBy(args);
  }

  @Query(() => AggregatePost_audit_log)
  async aggregatePostAuditLog(@Args() args: AggregatepostAuditLogArgs) {
    return this.postAuditLogService.aggregate(args);
  }

  @Mutation(() => post_audit_log)
  async createOnePostAuditLog(@Args() args: CreateOnepostAuditLogArgs) {
    return this.postAuditLogService.create(args);
  }

  @Mutation(() => post_audit_log)
  async createManyPostAuditLog(@Args() args: CreateManypostAuditLogArgs) {
    return this.postAuditLogService.createMany(args);
  }

  @Mutation(() => post_audit_log, { nullable: true })
  async updateOnePostAuditLog(@Args() args: UpdateOnepostAuditLogArgs) {
    return this.postAuditLogService.update(args);
  }

  @Mutation(() => post_audit_log)
  async updateManyPostAuditLog(@Args() args: UpdateManypostAuditLogArgs) {
    return this.postAuditLogService.updateMany(args);
  }

  @Mutation(() => post_audit_log, { nullable: true })
  async deleteOnePostAuditLog(@Args() args: DeleteOnepostAuditLogArgs) {
    return this.postAuditLogService.delete(args);
  }

  @Mutation(() => post_audit_log)
  async deleteManyPostAuditLog(@Args() args: DeleteManypostAuditLogArgs) {
    return this.postAuditLogService.deleteMany(args);
  }
}
