import { Test, TestingModule } from '@nestjs/testing';
import { PostUserTagResolver } from './post-user-tag.resolver';

describe('PostUserTagResolver', () => {
  let resolver: PostUserTagResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostUserTagResolver],
    }).compile();

    resolver = module.get<PostUserTagResolver>(PostUserTagResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
