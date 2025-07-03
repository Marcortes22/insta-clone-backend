import { PrismaClient } from '@prisma/client';
import { likedPosts } from './liked-post.data';

export async function seedLikedPosts(prisma: PrismaClient) {
  for (const likedPost of likedPosts) {
    await prisma.liked_post.create({
      data: likedPost,
    });
  }
}
