import { PrismaClient } from '@prisma/client';
import { genders } from './gender.data';

export async function seedGenders(prisma: PrismaClient) {
  await prisma.gender.createMany({
    data: genders,
    skipDuplicates: true,
  });
}
