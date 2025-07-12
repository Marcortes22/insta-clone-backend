import { Test, TestingModule } from '@nestjs/testing';
import { ReportedPostService } from './reported-post.service';

describe('ReportedPostService', () => {
  let service: ReportedPostService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReportedPostService],
    }).compile();

    service = module.get<ReportedPostService>(ReportedPostService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
