import { Module } from '@nestjs/common';
import { ReportReasonService } from './report-reason.service';
import { ReportReasonResolver } from './report-reason.resolver';

@Module({
  providers: [ReportReasonService, ReportReasonResolver],
})
export class ReportReasonModule {}
