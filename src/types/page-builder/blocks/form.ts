import type { PortableTextBlock } from '@portabletext/types';

export type FormBlockType = {
  _id: string;
  _key: string;
  _type: 'formBlock';
  heading: string;
  content: PortableTextBlock;
  formFields: FormField[];
  paddingTop: string;
  paddingBottom: string;
}

export type FormField = {
  _key: string;
  inputType: 'text' | 'email' | 'tel' | 'textarea';
  name: string;
  label: string;
  placeholder: string;
  isRequired: boolean;
};