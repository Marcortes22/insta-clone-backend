import { Test, TestingModule } from '@nestjs/testing';
import { PostUserTagService } from './post-user-tag.service';

describe('PostUserTagService', () => {
  let service: PostUserTagService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostUserTagService],
    }).compile();

    service = module.get<PostUserTagService>(PostUserTagService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
