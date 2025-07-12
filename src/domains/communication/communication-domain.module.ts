import { Module } from '@nestjs/common';
import {
  ConversationModule,
  MessageModule,
  MessageAttachmentModule,
} from './index';

@Module({
  imports: [ConversationModule, MessageModule, MessageAttachmentModule],
  exports: [ConversationModule, MessageModule, MessageAttachmentModule],
})
export class CommunicationDomainModule {}
