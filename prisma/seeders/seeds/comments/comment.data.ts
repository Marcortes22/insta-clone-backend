import { Prisma } from '@prisma/client';

export const comments: Prisma.commentCreateInput[] = [
  {
    content: 'Amazing shot! 📸',
    created_at: new Date(),
    post: {
      connect: { id: 1 }, // john_doe's post
    },
    user: {
      connect: { id: 2 }, // commented by jane_smith
    },
  },
  {
    content: 'Love this! Where was this taken?',
    created_at: new Date(),
    post: {
      connect: { id: 1 }, // john_doe's post
    },
    user: {
      connect: { id: 4 }, // commented by sarah_connor
    },
  },
  {
    content: 'Looks delicious! Recipe please? 🙏',
    created_at: new Date(),
    post: {
      connect: { id: 2 }, // jane_smith's post
    },
    user: {
      connect: { id: 1 }, // commented by john_doe
    },
  },
  {
    content: 'Great setup! What monitor is that?',
    created_at: new Date(),
    post: {
      connect: { id: 3 }, // mike_wilson's post
    },
    user: {
      connect: { id: 5 }, // commented by alex_taylor
    },
  },
  {
    content: 'Keep up the good work! 💪',
    created_at: new Date(),
    post: {
      connect: { id: 4 }, // sarah_connor's post
    },
    user: {
      connect: { id: 2 }, // commented by jane_smith
    },
  },
];
