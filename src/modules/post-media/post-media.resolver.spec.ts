import { Test, TestingModule } from '@nestjs/testing';
import { PostMediaResolver } from './post-media.resolver';

describe('PostMediaResolver', () => {
  let resolver: PostMediaResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostMediaResolver],
    }).compile();

    resolver = module.get<PostMediaResolver>(PostMediaResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
