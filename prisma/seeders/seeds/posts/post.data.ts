import { Prisma } from '@prisma/client';

export const posts: Prisma.postCreateInput[] = [
  {
    caption: 'Beautiful sunset at the beach 🌅',
    is_archived: false,
    created_at: new Date(),
    user: {
      connect: { id: 1 },
    },
    location: {
      connect: { id: 1 },
    },
  },
  {
    caption: 'Delicious homemade pasta 🍝',
    is_archived: false,
    created_at: new Date(),
    user: {
      connect: { id: 2 },
    },
    location: {
      connect: { id: 2 },
    },
  },
  {
    caption: 'Gaming setup is finally complete! 🎮',
    is_archived: false,
    created_at: new Date(),
    user: {
      connect: { id: 3 },
    },
    location: {
      connect: { id: 3 },
    },
  },
  {
    caption: 'Morning workout done! 💪',
    is_archived: false,
    created_at: new Date(),
    user: {
      connect: { id: 4 },
    },
    location: {
      connect: { id: 4 },
    },
  },
  {
    caption: 'Working from a beautiful café today ☕',
    is_archived: false,
    created_at: new Date(),
    user: {
      connect: { id: 5 },
    },
    location: {
      connect: { id: 5 },
    },
  },
];
