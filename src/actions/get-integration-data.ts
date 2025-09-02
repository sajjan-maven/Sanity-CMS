import { client } from "@/sanity/lib/client";
import {
    allIntegrationApplicationsQuery,
    allIntegrationCategoriesQuery,
    integrationPageQuery
} from "@/sanity/lib/queries/documents/integration";


export async function getIntegrationData(): Promise<any> {
    try {
        const [applications, categories, page] = await Promise.all([
            client.fetch(allIntegrationApplicationsQuery),
            client.fetch(allIntegrationCategoriesQuery),
            client.fetch(integrationPageQuery)
        ]);

        return {
            applications,
            categories,
            page
        };
    } catch (error) {
        console.error("Error fetching integration data:", error);
        return {
            applications: [],
            categories: [],
            page: undefined
        };
    }
}

export async function getIntegrationApplications(): Promise<any[]> {
    try {
        return await client.fetch(allIntegrationApplicationsQuery);
    } catch (error) {
        console.error("Error fetching integration applications:", error);
        return [];
    }
}

export async function getIntegrationCategories(): Promise<any[]> {
    try {
        return await client.fetch(allIntegrationCategoriesQuery);
    } catch (error) {
        console.error("Error fetching integration categories:", error);
        return [];
    }
}
