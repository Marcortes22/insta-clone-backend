import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class BaseCrudService<
  T,
  FindFirstArg,
  FindUniqueArg,
  FindManyArg,
  GroupByArg,
  AggregateArg,
  CreateArg,
  CreateManyArg,
  UpdateArg,
  UpdatedManyArg,
  DeleteArg,
  DeleteManyArg,
> {
  constructor(public prisma: PrismaService) {}

  async findFirst(args: FindFirstArg): Promise<T | null> {
    return await this.prisma[this.getModelName()].findFirst(args);
  }
  findUnique(args: FindUniqueArg): Promise<T | null> {
    return this.prisma[this.getModelName()].findUnique(args);
  }

  findMany(args: FindManyArg): Promise<T[]> {
    return this.prisma[this.getModelName()].findMany(args);
  }

  groupBy(args: GroupByArg) {
    return this.prisma[this.getModelName()].groupBy(args);
  }

  aggregate(args: AggregateArg) {
    return this.prisma[this.getModelName()].aggregate(args);
  }

  create(args: CreateArg): Promise<T> {
    return this.prisma[this.getModelName()].create(args);
  }

  createMany(args: CreateManyArg) {
    return this.prisma[this.getModelName()].createMany(args);
  }

  update(args: UpdateArg): Promise<T> {
    return this.prisma[this.getModelName()].update(args);
  }

  updateMany(args: UpdatedManyArg) {
    return this.prisma[this.getModelName()].updateMany(args);
  }

  delete(args: DeleteArg): Promise<T> {
    return this.prisma[this.getModelName()].delete(args);
  }

  deleteMany(args: DeleteManyArg) {
    return this.prisma[this.getModelName()].deleteMany(args);
  }

  protected getModelName(): string {
    return this.constructor.name
      .replace('Service', '')
      .replace(/([A-Z])/g, '_$1')
      .toLowerCase()
      .substring(1);
  }
}
