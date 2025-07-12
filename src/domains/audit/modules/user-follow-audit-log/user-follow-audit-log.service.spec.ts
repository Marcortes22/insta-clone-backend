import { Test, TestingModule } from '@nestjs/testing';
import { UserFollowAuditLogService } from './user-follow-audit-log.service';

describe('UserFollowAuditLogService', () => {
  let service: UserFollowAuditLogService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserFollowAuditLogService],
    }).compile();

    service = module.get<UserFollowAuditLogService>(UserFollowAuditLogService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
