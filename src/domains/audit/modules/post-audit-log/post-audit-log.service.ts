import { PrismaService } from '@/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { BaseCrudService } from '@/shared/generic-service/base_crud.service';
import { post_audit_log } from '@/shared/prismagraphql/post-audit-log';
import {
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

@Injectable()
export class PostAuditLogService extends BaseCrudService<
  post_audit_log,
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
  DeleteManypostAuditLogArgs
> {
  constructor(prisma: PrismaService) {
    super(prisma);
  }
}
