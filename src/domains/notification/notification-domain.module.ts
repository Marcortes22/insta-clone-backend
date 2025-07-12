import { Module } from '@nestjs/common';
import { NotificationModule, NotificationTypeModule } from './index';

@Module({
  imports: [NotificationModule, NotificationTypeModule],
  exports: [NotificationModule, NotificationTypeModule],
})
export class NotificationDomainModule {}
