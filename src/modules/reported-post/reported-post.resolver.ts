import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ReportedPostService } from './reported-post.service';
import { reported_post } from '@/shared/prismagraphql/reported-post';
import {
  AggregateReported_post,
  Reported_postGroupBy,
  FindFirstreportedPostArgs,
  FindUniquereportedPostArgs,
  FindManyreportedPostArgs,
  GroupByreportedPostArgs,
  AggregatereportedPostArgs,
  CreateOnereportedPostArgs,
  CreateManyreportedPostArgs,
  UpdateOnereportedPostArgs,
  UpdateManyreportedPostArgs,
  DeleteOnereportedPostArgs,
  DeleteManyreportedPostArgs,
} from '@/shared/prismagraphql/prisma';

@Resolver(() => reported_post)
export class ReportedPostResolver {
  constructor(private readonly reportedPostService: ReportedPostService) {}

  @Query(() => reported_post, { nullable: true })
  async findFirstReportedPost(@Args() args: FindFirstreportedPostArgs) {
    return this.reportedPostService.findFirst(args);
  }

  @Query(() => reported_post, { nullable: true })
  async findUniqueReportedPost(@Args() args: FindUniquereportedPostArgs) {
    return this.reportedPostService.findUnique(args);
  }

  @Query(() => [reported_post])
  async findManyReportedPost(@Args() args: FindManyreportedPostArgs) {
    return this.reportedPostService.findMany(args);
  }

  @Query(() => [Reported_postGroupBy])
  async groupByReportedPost(@Args() args: GroupByreportedPostArgs) {
    return this.reportedPostService.groupBy(args);
  }

  @Query(() => AggregateReported_post)
  async aggregateReportedPost(@Args() args: AggregatereportedPostArgs) {
    return this.reportedPostService.aggregate(args);
  }

  @Mutation(() => reported_post)
  async createOneReportedPost(@Args() args: CreateOnereportedPostArgs) {
    return this.reportedPostService.create(args);
  }

  @Mutation(() => reported_post)
  async createManyReportedPost(@Args() args: CreateManyreportedPostArgs) {
    return this.reportedPostService.createMany(args);
  }

  @Mutation(() => reported_post, { nullable: true })
  async updateOneReportedPost(@Args() args: UpdateOnereportedPostArgs) {
    return this.reportedPostService.update(args);
  }

  @Mutation(() => reported_post)
  async updateManyReportedPost(@Args() args: UpdateManyreportedPostArgs) {
    return this.reportedPostService.updateMany(args);
  }

  @Mutation(() => reported_post, { nullable: true })
  async deleteOneReportedPost(@Args() args: DeleteOnereportedPostArgs) {
    return this.reportedPostService.delete(args);
  }

  @Mutation(() => reported_post)
  async deleteManyReportedPost(@Args() args: DeleteManyreportedPostArgs) {
    return this.reportedPostService.deleteMany(args);
  }
}
