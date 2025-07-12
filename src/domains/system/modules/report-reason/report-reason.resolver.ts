import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ReportReasonService } from './report-reason.service';
import { report_reason } from '@/shared/prismagraphql/report-reason';
import {
  AggregateReport_reason,
  Report_reasonGroupBy,
  FindFirstreportReasonArgs,
  FindUniquereportReasonArgs,
  FindManyreportReasonArgs,
  GroupByreportReasonArgs,
  AggregatereportReasonArgs,
  CreateOnereportReasonArgs,
  CreateManyreportReasonArgs,
  UpdateOnereportReasonArgs,
  UpdateManyreportReasonArgs,
  DeleteOnereportReasonArgs,
  DeleteManyreportReasonArgs,
} from '@/shared/prismagraphql/prisma';

@Resolver(() => report_reason)
export class ReportReasonResolver {
  constructor(private readonly reportReasonService: ReportReasonService) {}

  @Query(() => report_reason, { nullable: true })
  async findFirstReportReason(@Args() args: FindFirstreportReasonArgs) {
    return this.reportReasonService.findFirst(args);
  }

  @Query(() => report_reason, { nullable: true })
  async findUniqueReportReason(@Args() args: FindUniquereportReasonArgs) {
    return this.reportReasonService.findUnique(args);
  }

  @Query(() => [report_reason])
  async findManyReportReason(@Args() args: FindManyreportReasonArgs) {
    return this.reportReasonService.findMany(args);
  }

  @Query(() => [Report_reasonGroupBy])
  async groupByReportReason(@Args() args: GroupByreportReasonArgs) {
    return this.reportReasonService.groupBy(args);
  }

  @Query(() => AggregateReport_reason)
  async aggregateReportReason(@Args() args: AggregatereportReasonArgs) {
    return this.reportReasonService.aggregate(args);
  }

  @Mutation(() => report_reason)
  async createOneReportReason(@Args() args: CreateOnereportReasonArgs) {
    return this.reportReasonService.create(args);
  }

  @Mutation(() => report_reason)
  async createManyReportReason(@Args() args: CreateManyreportReasonArgs) {
    return this.reportReasonService.createMany(args);
  }

  @Mutation(() => report_reason, { nullable: true })
  async updateOneReportReason(@Args() args: UpdateOnereportReasonArgs) {
    return this.reportReasonService.update(args);
  }

  @Mutation(() => report_reason)
  async updateManyReportReason(@Args() args: UpdateManyreportReasonArgs) {
    return this.reportReasonService.updateMany(args);
  }

  @Mutation(() => report_reason, { nullable: true })
  async deleteOneReportReason(@Args() args: DeleteOnereportReasonArgs) {
    return this.reportReasonService.delete(args);
  }

  @Mutation(() => report_reason)
  async deleteManyReportReason(@Args() args: DeleteManyreportReasonArgs) {
    return this.reportReasonService.deleteMany(args);
  }
}
