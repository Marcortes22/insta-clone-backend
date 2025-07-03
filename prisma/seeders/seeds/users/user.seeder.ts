import { PrismaClient } from '@prisma/client';
import { users } from './user.data';

export async function seedUsers(prisma: PrismaClient) {
  for (const user of users) {
    await prisma.user.create({
      data: user,
    });
  }
}
