import { Test, TestingModule } from '@nestjs/testing';
import { UserAuditLogService } from './user-audit-log.service';

describe('UserAuditLogService', () => {
  let service: UserAuditLogService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserAuditLogService],
    }).compile();

    service = module.get<UserAuditLogService>(UserAuditLogService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
