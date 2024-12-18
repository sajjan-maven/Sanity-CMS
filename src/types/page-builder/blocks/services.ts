import { ServiceType } from "@/types/service";

export type ServicesBlockType = {
  _id: string;
  _key: string;
  _type: 'servicesBlock';
  heading?: string;
  services: ServiceType[];
  paddingTop: string;
  paddingBottom: string;
}