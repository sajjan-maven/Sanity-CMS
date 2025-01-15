import { defineConfig } from 'sanity';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from '@/sanity/schemas';
import { structureTool } from 'sanity/structure';
import { structure } from '@/sanity/lib/structure';
import { presentationTool } from 'sanity/presentation';
import { resolve } from '@/sanity/presentation/resolve';
import { simplerColorInput } from 'sanity-plugin-simpler-color-input'
import { defaultDocumentNode } from '@/sanity/lib/default-document-node';
import { apiVersion, dataset, projectId, studioUrl, useCdn } from '@/sanity/lib/sanity-api';

const title = 'SiteEngine';

const config = defineConfig({
  title: title,
  useCdn: useCdn,
  dataset: dataset,
  basePath: studioUrl,
  projectId: projectId,
  apiVersion: apiVersion,
  plugins: [
    structureTool({
      structure,
      defaultDocumentNode
    }),
    presentationTool({
      resolve,
      previewUrl: {
        previewMode: {
          enable: '/api/draft-mode/enable',
          disable: '/api/draft-mode/disable',
        },
      },
    }),
    visionTool(),
    simplerColorInput()
  ],
  schema: { types: schemaTypes },
})

export default config