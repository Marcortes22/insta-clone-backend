import { action_typeCreateInput } from '@/shared/prismagraphql/action-type';

export const actionTypes: action_typeCreateInput[] = [
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
