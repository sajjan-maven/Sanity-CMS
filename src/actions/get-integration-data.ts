import { client } from "@/sanity/lib/client";
import {
    allIntegrationApplicationsQuery,
    allIntegrationCategoriesQuery,
    integrationPageQuery
} from "@/sanity/lib/queries/documents/integration";

export interface IntegrationApplication {
    _id: string;
    _type: 'integrationApplication';
    applicationName: string;
    image?: {
        asset: {
            url: string;
        };
        altText?: string;
    };
    category?: {
        _id: string;
        _type: 'integrationCategory';
        title: string;
        slug: {
            current: string;
        };
    };
    addDescription: boolean;
    applicationDesc?: string;
}

export interface IntegrationCategory {
    _id: string;
    _type: 'integrationCategory';
    title: string;
    slug: {
        current: string;
    };
}

export interface IntegrationPageData {
    applications: IntegrationApplication[];
    categories: IntegrationCategory[];
    page?: {
        _id: string;
        _type: 'page';
        title: string;
        slug: {
            current: string;
        };
        seo?: {
            title: string;
            description: string;
            noIndex: boolean;
            image?: any;
        };
    };
}

export async function getIntegrationData(): Promise<IntegrationPageData> {
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

export async function getIntegrationApplications(): Promise<IntegrationApplication[]> {
    try {
        return await client.fetch(allIntegrationApplicationsQuery);
    } catch (error) {
        console.error("Error fetching integration applications:", error);
        return [];
    }
}

export async function getIntegrationCategories(): Promise<IntegrationCategory[]> {
    try {
        return await client.fetch(allIntegrationCategoriesQuery);
    } catch (error) {
        console.error("Error fetching integration categories:", error);
        return [];
    }
}
