import { PageType } from "./page";

export type ButtonType = {
  _key: string;
  showButton?: boolean;
  buttonText?: string;
  buttonVariant?: 'primary' | 'underline' | 'outline' | 'tertiary' | 'underline';
  buttonType: 'internal' | 'anchor' | 'external' | 'fileDownload' | 'emailAddress';
  buttonWidth: 'auto' | 'fullWidth';
  buttonPageReference?: PageType;
  buttonAnchorLocation?: 'currentPage' | 'choosePage';
  buttonAnchorId?: string;
  buttonExternalUrl?: string;
  buttonEmailAddress?: string;
  buttonFileUrl?: {
    asset: {
      url: string;
    }
  };
}