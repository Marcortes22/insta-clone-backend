import { notification_typeCreateInput } from '@/shared/prismagraphql/notification-type';

export const notificationTypes: notification_typeCreateInput[] = [
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
