import { PrismaClient } from '@prisma/client';
import { roles } from './role.data';

export async function seedRoles(prisma: PrismaClient) {
  await prisma.role.createMany({
    data: roles,
    skipDuplicates: true,
  });
}
