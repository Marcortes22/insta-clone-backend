import { user_roleCreateInput } from '@/shared/prismagraphql/user-role';

export const userRoles: user_roleCreateInput[] = [
  {
    created_at: new Date(),
    role: {
      connect: { id: 1 }, // ADMIN
    },
    user: {
      connect: { id: 1 }, // john_doe
    },
  },
  {
    created_at: new Date(),
    role: {
      connect: { id: 3 }, // USER
    },
    user: {
      connect: { id: 2 }, // jane_smith
    },
  },
  {
    created_at: new Date(),
    role: {
      connect: { id: 3 }, // USER
    },
    user: {
      connect: { id: 3 }, // mike_wilson
    },
  },
  {
    created_at: new Date(),
    role: {
      connect: { id: 2 }, // MODERATOR
    },
    user: {
      connect: { id: 4 }, // sarah_connor
    },
  },
  {
    created_at: new Date(),
    role: {
      connect: { id: 3 }, // USER
    },
    user: {
      connect: { id: 5 }, // alex_taylor
    },
  },
];
