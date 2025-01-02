import { PageType } from "@/types/page";
import { ServiceType } from "@/types/service";

export type ServicesBlockType = {
  _id: string;
  _key: string;
  _type: 'servicesBlock';
  heading?: string;
  services: ServiceType[];
  background: 'white' | 'pattern';
  topCornerRadius: 'straight' | 'rounded';
  showButton: boolean;
  buttonPageReference: PageType;
  paddingTop: string;
  paddingBottom: string;
}