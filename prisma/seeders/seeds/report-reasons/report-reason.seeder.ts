import { PrismaClient } from '@prisma/client';
import { reportReasons } from './report-reason.data';

export async function seedReportReasons(prisma: PrismaClient) {
  await prisma.report_reason.createMany({
    data: reportReasons,
    skipDuplicates: true,
  });
}
