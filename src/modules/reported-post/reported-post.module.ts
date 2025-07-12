import { Module } from '@nestjs/common';
import { ReportedPostService } from './reported-post.service';
import { ReportedPostResolver } from './reported-post.resolver';

@Module({
  providers: [ReportedPostService, ReportedPostResolver],
})
export class ReportedPostModule {}
