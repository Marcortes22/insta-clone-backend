import { Test, TestingModule } from '@nestjs/testing';
import { CommentAuditLogService } from './comment-audit-log.service';

describe('CommentAuditLogService', () => {
  let service: CommentAuditLogService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommentAuditLogService],
    }).compile();

    service = module.get<CommentAuditLogService>(CommentAuditLogService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
