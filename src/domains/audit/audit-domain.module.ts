import { Module } from '@nestjs/common';
import {
  UserAuditLogModule,
  UserFollowAuditLogModule,
  PostAuditLogModule,
  CommentAuditLogModule,
  LoginHistoryModule,
  ActionTypeModule,
} from './index';

@Module({
  imports: [
    UserAuditLogModule,
    UserFollowAuditLogModule,
    PostAuditLogModule,
    CommentAuditLogModule,
    LoginHistoryModule,
    ActionTypeModule,
  ],
  exports: [
    UserAuditLogModule,
    UserFollowAuditLogModule,
    PostAuditLogModule,
    CommentAuditLogModule,
    LoginHistoryModule,
    ActionTypeModule,
  ],
})
export class AuditDomainModule {}
