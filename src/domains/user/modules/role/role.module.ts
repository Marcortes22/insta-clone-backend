import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleResolver } from './role.resolver';

@Module({
  providers: [RoleService, RoleResolver],
})
export class RoleModule {}
