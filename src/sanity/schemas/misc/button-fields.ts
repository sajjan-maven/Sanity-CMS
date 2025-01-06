import { defineField } from "sanity";
import { pageReferenceTypes } from "./page-reference-types";

export const buttonFields = [
  defineField({
    name: 'showButton',
    title: 'Show Button',
    type: 'boolean',
    initialValue: false
  }),
  defineField({
    name: 'buttonText',
    title: 'Button Text',
    type: 'string',
    hidden: ({parent}) => !parent?.showButton,
  }),
  defineField({
    title: "Button Variant",
    name: "buttonVariant",
    type: "string",
    options: {
      list: [
        { title: "Primary", value: "primary" },
        { title: "Secondary", value: "secondary" },
        { title: "Tertiary", value: "tertiary" },
        { title: "Outline", value: "outline" },
        { title: "Underline", value: "underline" },
      ],
    },
    initialValue: 'primary',
    hidden: ({parent}) => !parent?.showButton,
  }),
  defineField({
    title: "Button Width",
    name: "buttonWidth",
    type: "string",
    options: {
      list: [
        { title: "Automatic", value: "auto" },
        { title: "Full-Width", value: "fullWidth" },
      ],
    },
    initialValue: 'default',
    hidden: ({parent}) => !parent?.showButton,
  }),
  defineField({
    title: "Button Type",
    name: "buttonType",
    type: "string",
    options: {
      list: [
        { title: "Internal", value: "internal" },
        { title: "External", value: "external" },
        { title: "File Download", value: "fileDownload" },
      ],
    },
    initialValue: 'internal',
    hidden: ({parent}) => !parent?.showButton,
  }),
  defineField({
    name: 'buttonPageReference',
    title: 'Button Page Reference',
    description: 'The page that the button will link to.',
    type: 'reference',
    to: [ ...pageReferenceTypes ],
    hidden: ({ parent }) => !parent?.showButton || parent?.buttonType !== 'internal',
  }),
  defineField({
    name: 'buttonExternalUrl',
    title: 'Button External URL',
    description: 'The external URL that the button will link to.',
    type: 'url',
    validation: Rule => Rule.uri({ scheme: ['http', 'https', 'mailto', 'tel'] }),
    hidden: ({ parent }) => !parent?.showButton || parent?.buttonType !== 'external',
  }),
  defineField({
    name: 'buttonFileUrl',
    type: 'file',  
    hidden: ({ parent }) => !parent?.showButton || parent?.buttonType !== 'fileDownload',
  })
]