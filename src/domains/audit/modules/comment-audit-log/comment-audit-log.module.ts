import { Module } from '@nestjs/common';
import { CommentAuditLogService } from './comment-audit-log.service';
import { CommentAuditLogResolver } from './comment-audit-log.resolver';

@Module({
  providers: [CommentAuditLogService, CommentAuditLogResolver],
})
export class CommentAuditLogModule {}
