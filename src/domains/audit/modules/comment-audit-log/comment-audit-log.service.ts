import { PrismaService } from '@/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { BaseCrudService } from '@/shared/generic-service/base_crud.service';
import { comment_audit_log } from '@/shared/prismagraphql/comment-audit-log';
import {
  FindFirstcommentAuditLogArgs,
  FindUniquecommentAuditLogArgs,
  FindManycommentAuditLogArgs,
  GroupBycommentAuditLogArgs,
  AggregatecommentAuditLogArgs,
  CreateOnecommentAuditLogArgs,
  CreateManycommentAuditLogArgs,
  UpdateOnecommentAuditLogArgs,
  UpdateManycommentAuditLogArgs,
  DeleteOnecommentAuditLogArgs,
  DeleteManycommentAuditLogArgs,
} from '@/shared/prismagraphql/prisma';

@Injectable()
export class CommentAuditLogService extends BaseCrudService<
  comment_audit_log,
  FindFirstcommentAuditLogArgs,
  FindUniquecommentAuditLogArgs,
  FindManycommentAuditLogArgs,
  GroupBycommentAuditLogArgs,
  AggregatecommentAuditLogArgs,
  CreateOnecommentAuditLogArgs,
  CreateManycommentAuditLogArgs,
  UpdateOnecommentAuditLogArgs,
  UpdateManycommentAuditLogArgs,
  DeleteOnecommentAuditLogArgs,
  DeleteManycommentAuditLogArgs
> {
  constructor(prisma: PrismaService) {
    super(prisma);
  }
}
