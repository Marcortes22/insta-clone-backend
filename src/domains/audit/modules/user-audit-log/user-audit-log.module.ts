import { Module } from '@nestjs/common';
import { UserAuditLogService } from './user-audit-log.service';
import { UserAuditLogResolver } from './user-audit-log.resolver';

@Module({
  providers: [UserAuditLogService, UserAuditLogResolver],
})
export class UserAuditLogModule {}
