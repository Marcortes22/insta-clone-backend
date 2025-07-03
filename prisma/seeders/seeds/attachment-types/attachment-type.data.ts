import { attachment_typeCreateInput } from '@/shared/prismagraphql/attachment-type';

export const attachmentTypes: attachment_typeCreateInput[] = [
  {
    name: 'IMAGE',
  },
  {
    name: 'VIDEO',
  },
  {
    name: 'AUDIO',
  },
  {
    name: 'DOCUMENT',
  },
];
