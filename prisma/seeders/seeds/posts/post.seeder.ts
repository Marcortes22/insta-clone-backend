import { PrismaClient } from '@prisma/client';
import { posts } from './post.data';

export async function seedPosts(prisma: PrismaClient) {
  for (const post of posts) {
    await prisma.post.create({
      data: post,
    });
  }
}
