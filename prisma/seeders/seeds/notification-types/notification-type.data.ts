import { Prisma } from '@prisma/client';

export const notificationTypes: Prisma.notification_typeCreateInput[] = [
  {
    name: 'LIKE',
    description: 'Someone liked your post',
  },
  {
    name: 'COMMENT',
    description: 'Someone commented on your post',
  },
  {
    name: 'FOLLOW',
    description: 'Someone started following you',
  },
  {
    name: 'MENTION',
    description: 'Someone mentioned you in a post',
  },
  {
    name: 'MESSAGE',
    description: 'You received a new message',
  },
  {
    name: 'SYSTEM',
    description: 'System notification',
  },
];
