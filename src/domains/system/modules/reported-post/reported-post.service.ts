import { PrismaService } from '@/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { BaseCrudService } from '@/shared/generic-service/base_crud.service';
import { reported_post } from '@/shared/prismagraphql/reported-post';
import {
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

@Injectable()
export class ReportedPostService extends BaseCrudService<
  reported_post,
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
  DeleteManyreportedPostArgs
> {
  constructor(prisma: PrismaService) {
    super(prisma);
  }
}
