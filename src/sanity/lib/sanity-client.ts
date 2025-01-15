import { createClient } from "next-sanity";
import { dataset, projectId } from "./sanity-api";

export const client = createClient({
  projectId: projectId,
  dataset: dataset,
  apiVersion: "vX",
  useCdn: true,
  stega: { studioUrl: "http://localhost:3000/studio" },
});