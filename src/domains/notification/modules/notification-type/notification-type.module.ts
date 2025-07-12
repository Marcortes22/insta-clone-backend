import { Module } from '@nestjs/common';
import { NotificationTypeService } from './notification-type.service';
import { NotificationTypeResolver } from './notification-type.resolver';

@Module({
  providers: [NotificationTypeService, NotificationTypeResolver],
})
export class NotificationTypeModule {}
