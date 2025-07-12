import { Test, TestingModule } from '@nestjs/testing';
import { PostAuditLogService } from './post-audit-log.service';

describe('PostAuditLogService', () => {
  let service: PostAuditLogService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostAuditLogService],
    }).compile();

    service = module.get<PostAuditLogService>(PostAuditLogService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
