import { PrismaService } from '@/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { BaseCrudService } from '@/shared/generic-service/base_crud.service';
import { user_follow_audit_log } from '@/shared/prismagraphql/user-follow-audit-log';
import {
  FindFirstuserFollowAuditLogArgs,
  FindUniqueuserFollowAuditLogArgs,
  FindManyuserFollowAuditLogArgs,
  GroupByuserFollowAuditLogArgs,
  AggregateuserFollowAuditLogArgs,
  CreateOneuserFollowAuditLogArgs,
  CreateManyuserFollowAuditLogArgs,
  UpdateOneuserFollowAuditLogArgs,
  UpdateManyuserFollowAuditLogArgs,
  DeleteOneuserFollowAuditLogArgs,
  DeleteManyuserFollowAuditLogArgs,
} from '@/shared/prismagraphql/prisma';

@Injectable()
export class UserFollowAuditLogService extends BaseCrudService<
  user_follow_audit_log,
  FindFirstuserFollowAuditLogArgs,
  FindUniqueuserFollowAuditLogArgs,
  FindManyuserFollowAuditLogArgs,
  GroupByuserFollowAuditLogArgs,
  AggregateuserFollowAuditLogArgs,
  CreateOneuserFollowAuditLogArgs,
  CreateManyuserFollowAuditLogArgs,
  UpdateOneuserFollowAuditLogArgs,
  UpdateManyuserFollowAuditLogArgs,
  DeleteOneuserFollowAuditLogArgs,
  DeleteManyuserFollowAuditLogArgs
> {
  constructor(prisma: PrismaService) {
    super(prisma);
  }
}
