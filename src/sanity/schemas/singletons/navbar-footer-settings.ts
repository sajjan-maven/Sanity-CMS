import { defineField, defineType } from "sanity";
import { FiX } from "react-icons/fi";

export default defineType({
    name: "navbarFooterSettings",
    title: "Navbar Footer Settings",
    type: "document",
    icon: FiX,
    fields: [
        defineField({
            name: "excludedRoutes",
            title: "Excluded Routes",
            description: "Pages where the announcement bar should be hidden",
            type: "array",
            of: [
                {
                    type: "object",
                    name: "routeExclusion",
                    title: "Route Exclusion",
                    fields: [
                        defineField({
                            name: "path",
                            title: "Path",
                            description: "Enter the route path (e.g., /about or /contact)",
                            type: "string",
                            validation: (Rule) => [
                                Rule.required().error("Path is required"),
                                Rule.regex(/^\/[a-zA-Z0-9\-_\/]*$/, {
                                    name: "path",
                                    invert: false,
                                }).error("Path must start with / and contain only valid URL characters"),
                            ],
                        }),
                        defineField({
                            name: "note",
                            title: "Internal Note",
                            description: "Optional note about why this route is excluded",
                            type: "string",
                        }),
                    ],
                    preview: {
                        select: {
                            path: "path",
                            note: "note",
                        },
                        prepare({ path, note }) {
                            return {
                                title: path || "Untitled path",
                                subtitle: note,
                            };
                        },
                    },
                },
            ],
            // group: "visibility",
            validation: (Rule) => Rule.unique(),
        }),
    ],
    // groups: [
    //     {
    //         name: "visibility",
    //         title: "Visibility Settings",
    //     },
    // ],
    preview: {
        prepare() {
            return {
                title: "Navbar Footer Settings",
                subtitle: "Configure where Navbar and Footer appears",
            };
        },
    },
});