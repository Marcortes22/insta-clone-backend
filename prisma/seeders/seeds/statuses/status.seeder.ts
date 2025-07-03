import { PrismaClient } from '@prisma/client';
import { statuses } from './status.data';

export async function seedStatuses(prisma: PrismaClient) {
  await prisma.status.createMany({
    data: statuses,
    skipDuplicates: true,
  });
}
