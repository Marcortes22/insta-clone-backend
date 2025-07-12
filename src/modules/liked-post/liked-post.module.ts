import { Module } from '@nestjs/common';
import { LikedPostService } from './liked-post.service';
import { LikedPostResolver } from './liked-post.resolver';

@Module({
  providers: [LikedPostService, LikedPostResolver],
})
export class LikedPostModule {}
