import { PrismaClient } from '@prisma/client';
import { actionTypes } from './action-type.data';

export async function seedActionTypes(prisma: PrismaClient) {
  await prisma.action_type.createMany({
    data: actionTypes,
    skipDuplicates: true,
  });
}
