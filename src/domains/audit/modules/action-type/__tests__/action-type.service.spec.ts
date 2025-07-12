import { Test, TestingModule } from '@nestjs/testing';
import { ActionTypeService } from '../action-type.service';
import { PrismaService } from '@/prisma/prisma.service';

describe('ActionTypeService', () => {
  let service: ActionTypeService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ActionTypeService,
        {
          provide: PrismaService,
          useValue: {
            action_type: {
              findFirst: jest.fn(),
              findUnique: jest.fn(),
              findMany: jest.fn(),
              create: jest.fn(),
              createMany: jest.fn(),
              update: jest.fn(),
              updateMany: jest.fn(),
              delete: jest.fn(),
              deleteMany: jest.fn(),
              groupBy: jest.fn(),
              aggregate: jest.fn(),
            },
          },
        },
      ],
    }).compile();

    service = module.get<ActionTypeService>(ActionTypeService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findMany', () => {
    it('should return an array of action types', async () => {
      const result = [{ id: 1, name: 'CREATE' }];
      jest.spyOn(prisma.action_type, 'findMany').mockResolvedValue(result);

      expect(await service.findMany({})).toBe(result);
    });
  });

  describe('findUnique', () => {
    it('should return a single action type', async () => {
      const result = { id: 1, name: 'CREATE' };
      jest.spyOn(prisma.action_type, 'findUnique').mockResolvedValue(result);

      expect(await service.findUnique({ where: { id: 1 } })).toBe(result);
    });
  });

  describe('create', () => {
    it('should create a new action type', async () => {
      const result = { id: 1, name: 'CREATE' };
      jest.spyOn(prisma.action_type, 'create').mockResolvedValue(result);

      expect(await service.create({ data: { name: 'CREATE' } })).toBe(result);
    });
  });

  describe('update', () => {
    it('should update an action type', async () => {
      const result = { id: 1, name: 'UPDATE' };
      jest.spyOn(prisma.action_type, 'update').mockResolvedValue(result);

      expect(
        await service.update({
          where: { id: 1 },
          data: { name: { set: 'UPDATE' } },
        }),
      ).toBe(result);
    });
  });

  describe('delete', () => {
    it('should delete an action type', async () => {
      const result = { id: 1, name: 'CREATE' };
      jest.spyOn(prisma.action_type, 'delete').mockResolvedValue(result);

      expect(await service.delete({ where: { id: 1 } })).toBe(result);
    });
  });
});
