import { FileQuestion } from "lucide-react";
import { fieldsets } from "../misc/fieldsets";
import { defineField, defineType } from "sanity";
import { fieldGroups } from "../misc/field-groups";
import { orderRankField, orderRankOrdering } from "@sanity/orderable-document-list";

export default defineType({
  name: 'faq',
  title: 'FAQs',
  type: 'document',
  icon: FileQuestion,
  fieldsets: [ ...fieldsets ],
  groups: [ ...fieldGroups ],
  orderings: [orderRankOrdering],
  fields: [
    defineField({
      name: 'question',
      title: 'Question',
      type: 'string',
    }),
    defineField({
      name: 'answer',
      title: 'Answer',
      type: 'array',
      of: [
        { type: 'block' },
      ],
    }),
    orderRankField({ 
      type: 'faq' 
    }),
  ]
})