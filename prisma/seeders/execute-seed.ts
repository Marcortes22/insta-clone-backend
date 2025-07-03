import { Logger } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
const logger = new Logger('Seeder');
export const executeSeed = async (
  seedName: string,
  prisma: PrismaClient,
  seedFunction: (prisma: PrismaClient) => Promise<void>,
) => {
  try {
    logger.log(`🌱 Starting seeding ${seedName} process...`);
    await seedFunction(prisma);

    logger.log(`✅ ${seedName} seeded successfully.`);
  } catch (error) {
    logger.error(`❌ Error while seeding ${seedName}:`, error);
    throw error;
  }
};
