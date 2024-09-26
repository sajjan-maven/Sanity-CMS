import { defineConfig } from 'sanity';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from '@/sanity/schemas';
import { structureTool } from 'sanity/structure';
import { apiVersion, dataset, projectId, studioUrl, useCdn } from '@/sanity/config/sanity-api';

const title = 'SiteEngine';

const config = defineConfig({
  title: title,
  useCdn: useCdn,
  dataset: dataset,
  basePath: studioUrl,
  projectId: projectId,
  apiVersion: apiVersion,
  plugins: [
    structureTool(),
    visionTool(),
  ],
  schema: { types: schemaTypes },
})

export default config