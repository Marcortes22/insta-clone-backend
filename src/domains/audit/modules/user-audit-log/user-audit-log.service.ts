import { PrismaService } from '@/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { BaseCrudService } from '@/shared/generic-service/base_crud.service';
import { user_audit_log } from '@/shared/prismagraphql/user-audit-log';
import {
  FindFirstuserAuditLogArgs,
  FindUniqueuserAuditLogArgs,
  FindManyuserAuditLogArgs,
  GroupByuserAuditLogArgs,
  AggregateuserAuditLogArgs,
  CreateOneuserAuditLogArgs,
  CreateManyuserAuditLogArgs,
  UpdateOneuserAuditLogArgs,
  UpdateManyuserAuditLogArgs,
  DeleteOneuserAuditLogArgs,
  DeleteManyuserAuditLogArgs,
} from '@/shared/prismagraphql/prisma';

@Injectable()
export class UserAuditLogService extends BaseCrudService<
  user_audit_log,
  FindFirstuserAuditLogArgs,
  FindUniqueuserAuditLogArgs,
  FindManyuserAuditLogArgs,
  GroupByuserAuditLogArgs,
  AggregateuserAuditLogArgs,
  CreateOneuserAuditLogArgs,
  CreateManyuserAuditLogArgs,
  UpdateOneuserAuditLogArgs,
  UpdateManyuserAuditLogArgs,
  DeleteOneuserAuditLogArgs,
  DeleteManyuserAuditLogArgs
> {
  constructor(prisma: PrismaService) {
    super(prisma);
  }
}
