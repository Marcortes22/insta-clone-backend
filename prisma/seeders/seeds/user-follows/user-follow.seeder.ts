import { PrismaClient } from '@prisma/client';
import { userFollows } from './user-follow.data';

export async function seedUserFollows(prisma: PrismaClient) {
  for (const userFollow of userFollows) {
    await prisma.user_follow.create({
      data: userFollow,
    });
  }
}
