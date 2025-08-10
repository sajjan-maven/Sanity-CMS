import { defineConfig } from 'sanity';
import { schema } from '@/sanity/schemas';
import { media } from 'sanity-plugin-media';
import { visionTool } from '@sanity/vision';
import { structureTool } from 'sanity/structure';
import { structure } from '@/sanity/lib/structure';
import { presentationTool } from 'sanity/presentation';
import { resolve } from '@/sanity/presentation/resolve';
import { simplerColorInput } from 'sanity-plugin-simpler-color-input'
import { defaultDocumentNode } from '@/sanity/lib/structure/default-document-node';
import { apiVersion, dataset, projectId, studioUrl, useCdn } from '@/sanity/lib/api';
import { colorInput } from '@sanity/color-input'

const config = defineConfig({
  title: process.env.NEXT_PUBLIC_SITE_NAME,
  useCdn: useCdn,
  dataset: dataset,
  basePath: studioUrl,
  projectId: projectId,
  apiVersion: apiVersion,
  plugins: [
    colorInput(),
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
    media(),
    visionTool(),
    // simplerColorInput(),
    simplerColorInput({
      // Note: These are all optional
      defaultColorFormat: 'rgba',
      defaultColorList: [
        { label: 'Accent', value: '#ca786d' },
        { label: 'Primary', value: '#626754' },
        { label: 'Secondary', value: '#363338' },
        { label: 'Tertiary', value: '#e4dbd0' },
        { label: 'Custom...', value: 'custom' },
      ],
      enableSearch: true,
      showColorValue: true,
    })
  ],
  schema: schema,
})

export default config