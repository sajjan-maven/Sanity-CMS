import { FormType } from '@/types/form';
import type { PortableTextBlock } from '@portabletext/types';

export type FormBlockType = {
  _id: string;
  _key: string;
  _type: 'formBlock';
  heading: string;
  content: PortableTextBlock;
  form: FormType;
  anchorId?: string;
  paddingTop: string;
  paddingBottom: string;
}