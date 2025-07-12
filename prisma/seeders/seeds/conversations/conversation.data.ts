import { Prisma } from '@prisma/client';

export const conversations: Prisma.conversationCreateInput[] = [
  {
    is_group: false,
    created_at: new Date(),
  },
  {
    is_group: false,
    created_at: new Date(),
  },
  {
    is_group: true,
    created_at: new Date(),
  },
];
