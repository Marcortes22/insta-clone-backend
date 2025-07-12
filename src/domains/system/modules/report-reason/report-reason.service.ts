import { PrismaService } from '@/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { BaseCrudService } from '@/shared/generic-service/base_crud.service';
import { report_reason } from '@/shared/prismagraphql/report-reason';
import {
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

@Injectable()
export class ReportReasonService extends BaseCrudService<
  report_reason,
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
  DeleteManyreportReasonArgs
> {
  constructor(prisma: PrismaService) {
    super(prisma);
  }
}
