// src/queries.js
import { gql } from '@apollo/client';

export const GET_SERVICES = gql`
  query GetServices {
    services {
      nodes {
        id
        title 
        content
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
`;