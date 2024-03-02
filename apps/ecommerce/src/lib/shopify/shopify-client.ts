import { createStorefrontApiClient } from "@shopify/storefront-api-client";
import { ensureStartsWith } from "../utils";


const domain = process.env.SHOPIFY_STORE_DOMAIN
    ? ensureStartsWith(process.env.SHOPIFY_STORE_DOMAIN, "https://")
    : "";

export const shopifyClient = createStorefrontApiClient({
    storeDomain: domain,
    apiVersion: process.env.SHOPIFY_API_VERSION || "2024-01",
    publicAccessToken: process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN,
});
