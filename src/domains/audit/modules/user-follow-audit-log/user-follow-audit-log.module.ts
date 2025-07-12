import { Module } from '@nestjs/common';
import { UserFollowAuditLogService } from './user-follow-audit-log.service';
import { UserFollowAuditLogResolver } from './user-follow-audit-log.resolver';

@Module({
  providers: [UserFollowAuditLogService, UserFollowAuditLogResolver],
})
export class UserFollowAuditLogModule {}
