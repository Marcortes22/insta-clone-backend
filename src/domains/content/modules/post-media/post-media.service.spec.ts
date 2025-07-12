import { Test, TestingModule } from '@nestjs/testing';
import { PostMediaService } from './post-media.service';

describe('PostMediaService', () => {
  let service: PostMediaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostMediaService],
    }).compile();

    service = module.get<PostMediaService>(PostMediaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
