import { Module } from '@nestjs/common';
import { PostAuditLogService } from './post-audit-log.service';
import { PostAuditLogResolver } from './post-audit-log.resolver';

@Module({
  providers: [PostAuditLogService, PostAuditLogResolver],
})
export class PostAuditLogModule {}
