import { Module } from '@nestjs/common';
import { PostMediaService } from './post-media.service';
import { PostMediaResolver } from './post-media.resolver';

@Module({
  providers: [PostMediaService, PostMediaResolver],
})
export class PostMediaModule {}
