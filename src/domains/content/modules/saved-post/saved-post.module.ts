import { Module } from '@nestjs/common';
import { SavedPostService } from './saved-post.service';
import { SavedPostResolver } from './saved-post.resolver';

@Module({
  providers: [SavedPostService, SavedPostResolver],
})
export class SavedPostModule {}
