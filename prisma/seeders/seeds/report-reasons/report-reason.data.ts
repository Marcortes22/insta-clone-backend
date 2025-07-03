import { report_reasonCreateInput } from '@/shared/prismagraphql/report-reason';

export const reportReasons: report_reasonCreateInput[] = [
  {
    reason: 'Spam',
    description: 'Unwanted commercial content or repetitive posts',
  },
  {
    reason: 'Inappropriate Content',
    description: 'Content that violates community guidelines',
  },
  {
    reason: 'Harassment',
    description: 'Bullying, threats, or hateful conduct',
  },
  {
    reason: 'Misinformation',
    description: 'False or misleading information',
  },
  {
    reason: 'Copyright Violation',
    description: 'Unauthorized use of copyrighted material',
  },
  {
    reason: 'Nudity or Sexual Content',
    description: 'Adult content that violates guidelines',
  },
  {
    reason: 'Violence',
    description: 'Content depicting violence or threats',
  },
  {
    reason: 'Other',
    description: 'Other reason not listed above',
  },
];
