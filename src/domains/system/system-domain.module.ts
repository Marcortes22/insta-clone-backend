import { Module } from '@nestjs/common';
import {
  AttachmentTypeModule,
  ReportedPostModule,
  ReportReasonModule,
  LocationModule,
} from './index';

@Module({
  imports: [
    AttachmentTypeModule,
    ReportedPostModule,
    ReportReasonModule,
    LocationModule,
  ],
  exports: [
    AttachmentTypeModule,
    ReportedPostModule,
    ReportReasonModule,
    LocationModule,
  ],
})
export class SystemDomainModule {}
