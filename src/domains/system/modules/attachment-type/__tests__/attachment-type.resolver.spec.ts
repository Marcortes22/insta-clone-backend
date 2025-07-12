import { Test, TestingModule } from '@nestjs/testing';
import { AttachmentTypeResolver } from './attachment-type.resolver';

describe('AttachmentTypeResolver', () => {
  let resolver: AttachmentTypeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AttachmentTypeResolver],
    }).compile();

    resolver = module.get<AttachmentTypeResolver>(AttachmentTypeResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
