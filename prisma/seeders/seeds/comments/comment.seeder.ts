import { PrismaClient } from '@prisma/client';
import { comments } from './comment.data';

export async function seedComments(prisma: PrismaClient) {
  for (const comment of comments) {
    await prisma.comment.create({
      data: comment,
    });
  }
}
