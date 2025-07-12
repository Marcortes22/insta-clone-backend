import { Module } from '@nestjs/common';
import { MessageAttachmentService } from './message-attachment.service';
import { MessageAttachmentResolver } from './message-attachment.resolver';

@Module({
  providers: [MessageAttachmentService, MessageAttachmentResolver],
})
export class MessageAttachmentModule {}
