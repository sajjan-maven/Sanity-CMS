import { PageType } from "./page";

export type ButtonType = {
  _id: string;
  showButton?: boolean;
  buttonText?: string;
  buttonVariant?: 'primary' | 'underline' | 'tertiary' | 'underline';
  buttonType?: 'internal' | 'external' | 'fileDownload';
  buttonPageReference?: PageType;
  buttonExternalUrl?: string;
}