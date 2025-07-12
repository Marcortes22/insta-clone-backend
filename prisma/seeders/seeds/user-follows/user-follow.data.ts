import { Prisma } from '@prisma/client';

export const userFollows: Prisma.user_followCreateInput[] = [
  {
    created_at: new Date(),
    user_user_follow_follower_idTouser: {
      connect: { id: 1 }, // john_doe follows
    },
    user_user_follow_followed_idTouser: {
      connect: { id: 2 }, // jane_smith
    },
  },
  {
    created_at: new Date(),
    user_user_follow_follower_idTouser: {
      connect: { id: 1 }, // john_doe follows
    },
    user_user_follow_followed_idTouser: {
      connect: { id: 4 }, // sarah_connor
    },
  },
  {
    created_at: new Date(),
    user_user_follow_follower_idTouser: {
      connect: { id: 2 }, // jane_smith follows
    },
    user_user_follow_followed_idTouser: {
      connect: { id: 1 }, // john_doe
    },
  },
  {
    created_at: new Date(),
    user_user_follow_follower_idTouser: {
      connect: { id: 2 }, // jane_smith follows
    },
    user_user_follow_followed_idTouser: {
      connect: { id: 5 }, // alex_taylor
    },
  },
  {
    created_at: new Date(),
    user_user_follow_follower_idTouser: {
      connect: { id: 4 }, // sarah_connor follows
    },
    user_user_follow_followed_idTouser: {
      connect: { id: 5 }, // alex_taylor
    },
  },
];
