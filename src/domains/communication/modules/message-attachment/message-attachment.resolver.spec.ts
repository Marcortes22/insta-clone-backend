import { Test, TestingModule } from '@nestjs/testing';
import { MessageAttachmentResolver } from './message-attachment.resolver';

describe('MessageAttachmentResolver', () => {
  let resolver: MessageAttachmentResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MessageAttachmentResolver],
    }).compile();

    resolver = module.get<MessageAttachmentResolver>(MessageAttachmentResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
