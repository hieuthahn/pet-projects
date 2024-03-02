import { gql } from "@/lib/utils";

export const getMetaobjectByHandle = gql`
  query getMetaobject($id: String!) {
    metaobject(id: "") {
      id
      handle
      type
    }
  }
`;
