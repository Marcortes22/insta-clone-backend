import { Module } from '@nestjs/common';
import { UserRoleService } from './user-role.service';
import { UserRoleResolver } from './user-role.resolver';

@Module({
  providers: [UserRoleService, UserRoleResolver],
})
export class UserRoleModule {}
