import { conversationCreateInput } from '@/shared/prismagraphql/conversation';

export const conversations: conversationCreateInput[] = [
  {
    is_group: false,
    created_At: new Date(),
  },
  {
    is_group: false,
    created_At: new Date(),
  },
  {
    is_group: true,
    created_At: new Date(),
  },
];
