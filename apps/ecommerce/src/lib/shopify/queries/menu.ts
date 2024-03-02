import { gql } from "@/lib/utils";

export const getMenuQuery = gql`
    query getMenu($handle: String!) {
        menu(handle: $handle) {
            items {
                id
                title
                url
                items {
                    title
                    type
                    url
                    tags
                    id
                    resourceId
                    resource {
                        ... on Collection {
                            id
                            handle
                            image {
                                width
                                transformedSrc
                                url
                            }
                        }
                    }
                    items {
                        title
                        type
                        url
                        tags
                        id
                        resourceId
                        resource {
                            ... on Collection {
                                id
                                handle
                                image {
                                    width
                                    transformedSrc
                                    url
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;