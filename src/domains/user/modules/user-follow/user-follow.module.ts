import { Module } from '@nestjs/common';
import { UserFollowService } from './user-follow.service';
import { UserFollowResolver } from './user-follow.resolver';

@Module({
  providers: [UserFollowService, UserFollowResolver],
})
export class UserFollowModule {}
