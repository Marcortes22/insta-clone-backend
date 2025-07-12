import { Module } from '@nestjs/common';
import { PostUserTagService } from './post-user-tag.service';
import { PostUserTagResolver } from './post-user-tag.resolver';

@Module({
  providers: [PostUserTagService, PostUserTagResolver],
})
export class PostUserTagModule {}
