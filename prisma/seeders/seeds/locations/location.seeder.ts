import { PrismaClient } from '@prisma/client';
import { locations } from './location.data';

export async function seedLocations(prisma: PrismaClient) {
  await prisma.location.createMany({
    data: locations,
    skipDuplicates: true,
  });
}
