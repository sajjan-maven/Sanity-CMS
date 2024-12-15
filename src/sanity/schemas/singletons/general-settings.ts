import { defineField, defineType } from "sanity";
import { pageReferenceTypes } from "../misc/page-reference-types";

export default defineType({
  name: 'generalSettings',
  title: 'General Settings',
  type: 'document',
  fields: [
    defineField({
      name: "siteTitle",
      type: "string",
      title: "Site Title",
    }),
    defineField({
      title: 'Logo',
      name: 'siteLogo',
      type: 'image',
    }),
    defineField({
      name: 'homePage',
      title: 'Home Page',
      type: 'reference',
      description: 'Choose which page you would like to set as the homepage.',
      to: [ ...pageReferenceTypes ]
    }),
    defineField({
      name: "copyright",
      type: "string",
      title: "Copyright",
      description: 'This will be displayed in the footer.'
    }),
  ]
})