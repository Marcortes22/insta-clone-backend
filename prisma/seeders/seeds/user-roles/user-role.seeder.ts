import { PrismaClient } from '@prisma/client';
import { userRoles } from './user-role.data';

export async function seedUserRoles(prisma: PrismaClient) {
  for (const userRole of userRoles) {
    await prisma.user_role.create({
      data: userRole,
    });
  }
}
