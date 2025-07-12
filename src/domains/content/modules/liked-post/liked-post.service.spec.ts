import { Test, TestingModule } from '@nestjs/testing';
import { LikedPostService } from './liked-post.service';

describe('LikedPostService', () => {
  let service: LikedPostService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LikedPostService],
    }).compile();

    service = module.get<LikedPostService>(LikedPostService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
