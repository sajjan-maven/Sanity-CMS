import { ServiceType } from "@/types/service";

export type ServicesBlockType = {
  _id: string;
  _key: string;
  _type: 'servicesBlock';
  heading?: string;
  services: ServiceType[];
  background: 'white' | 'pattern';
  topCornerRadius: 'straight' | 'rounded';
  paddingTop: string;
  paddingBottom: string;
}