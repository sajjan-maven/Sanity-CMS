import { Link } from "lucide-react";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "redirect",
  title: "Redirect",
  type: "document",
  icon: Link,
  fields: [
    defineField({
      name: "source",
      type: "string",
    }),
    defineField({
      name: "destination",
      type: "string",
    }),
    defineField({
      name: "permanent",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "isEnabled",
      description: "Toggle this redirect on or off",
      type: "boolean",
      initialValue: true,
    }),
  ],
});