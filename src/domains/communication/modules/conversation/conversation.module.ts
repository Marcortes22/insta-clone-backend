import { Module } from '@nestjs/common';
import { ConversationService } from './conversation.service';
import { ConversationResolver } from './conversation.resolver';

@Module({
  providers: [ConversationService, ConversationResolver],
})
export class ConversationModule {}
