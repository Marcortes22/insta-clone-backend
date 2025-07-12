import { Test, TestingModule } from '@nestjs/testing';
import { AttachmentTypeService } from './attachment-type.service';

describe('AttachmentTypeService', () => {
  let service: AttachmentTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AttachmentTypeService],
    }).compile();

    service = module.get<AttachmentTypeService>(AttachmentTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
