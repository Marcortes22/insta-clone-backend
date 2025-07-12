import { Prisma } from '@prisma/client';

export const actionTypes: Prisma.action_typeCreateInput[] = [
  {
    name: 'LOGIN',
  },
  {
    name: 'LOGOUT',
  },
  {
    name: 'CREATE',
  },
  {
    name: 'UPDATE',
  },
  {
    name: 'DELETE',
  },
  {
    name: 'FOLLOW',
  },
  {
    name: 'UNFOLLOW',
  },
];
