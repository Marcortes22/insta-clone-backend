import { liked_postCreateInput } from '@/shared/prismagraphql/liked-post';

export const likedPosts: liked_postCreateInput[] = [
  {
    created_at: new Date(),
    post: {
      connect: { id: 1 }, // john_doe's post
    },
    user: {
      connect: { id: 2 }, // liked by jane_smith
    },
  },
  {
    created_at: new Date(),
    post: {
      connect: { id: 1 }, // john_doe's post
    },
    user: {
      connect: { id: 4 }, // liked by sarah_connor
    },
  },
  {
    created_at: new Date(),
    post: {
      connect: { id: 2 }, // jane_smith's post
    },
    user: {
      connect: { id: 1 }, // liked by john_doe
    },
  },
  {
    created_at: new Date(),
    post: {
      connect: { id: 4 }, // sarah_connor's post
    },
    user: {
      connect: { id: 5 }, // liked by alex_taylor
    },
  },
];
