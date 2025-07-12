import { Module } from '@nestjs/common';
import {
  UserModule,
  UserFollowModule,
  UserRoleModule,
  UserConversationModule,
  GenderModule,
  RoleModule,
  StatusModule,
} from './index';

@Module({
  imports: [
    UserModule,
    UserFollowModule,
    UserRoleModule,
    UserConversationModule,
    GenderModule,
    RoleModule,
    StatusModule,
  ],
  exports: [
    UserModule,
    UserFollowModule,
    UserRoleModule,
    UserConversationModule,
    GenderModule,
    RoleModule,
    StatusModule,
  ],
})
export class UserDomainModule {}
