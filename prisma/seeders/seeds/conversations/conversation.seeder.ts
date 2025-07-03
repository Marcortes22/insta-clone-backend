import { PrismaClient } from '@prisma/client';
import { conversations } from './conversation.data';

export async function seedConversations(prisma: PrismaClient) {
  await prisma.conversation.createMany({
    data: conversations,
    skipDuplicates: true,
  });
}
