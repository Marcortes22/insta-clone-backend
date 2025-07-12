import { Module } from '@nestjs/common';
import {
  PostModule,
  CommentModule,
  PostMediaModule,
  PostUserTagModule,
  LikedPostModule,
  SavedPostModule,
} from './index';

@Module({
  imports: [
    PostModule,
    CommentModule,
    PostMediaModule,
    PostUserTagModule,
    LikedPostModule,
    SavedPostModule,
  ],
  exports: [
    PostModule,
    CommentModule,
    PostMediaModule,
    PostUserTagModule,
    LikedPostModule,
    SavedPostModule,
  ],
})
export class ContentDomainModule {}
