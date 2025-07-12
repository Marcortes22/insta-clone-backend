import { Test, TestingModule } from '@nestjs/testing';
import { MessageAttachmentService } from './message-attachment.service';

describe('MessageAttachmentService', () => {
  let service: MessageAttachmentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MessageAttachmentService],
    }).compile();

    service = module.get<MessageAttachmentService>(MessageAttachmentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
