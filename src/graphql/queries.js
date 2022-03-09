/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSearch = /* GraphQL */ `
  query GetSearch($id: ID!) {
    getSearch(id: $id) {
      id
      city
      state_code
      postal_code
      beds_min
      baths_min
      price_max
      type
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listSearches = /* GraphQL */ `
  query ListSearches(
    $filter: ModelSearchFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSearches(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        city
        state_code
        postal_code
        beds_min
        baths_min
        price_max
        type
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
