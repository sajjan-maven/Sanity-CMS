import { PageType } from "./page";

export type ButtonType = {
  _key: string;
  showButton?: boolean;
  buttonText?: string;
  buttonVariant?: 'primary' | 'underline' | 'outline' | 'tertiary' | 'underline';
  buttonType: 'internal' | 'external' | 'fileDownload';
  buttonWidth: 'auto' | 'fullWidth';
  buttonPageReference?: PageType;
  buttonExternalUrl?: string;
  buttonFileUrl?: {
    asset: {
      url: string;
    }
  };
}