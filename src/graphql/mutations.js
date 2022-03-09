/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSearch = /* GraphQL */ `
  mutation CreateSearch(
    $input: CreateSearchInput!
    $condition: ModelSearchConditionInput
  ) {
    createSearch(input: $input, condition: $condition) {
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
export const updateSearch = /* GraphQL */ `
  mutation UpdateSearch(
    $input: UpdateSearchInput!
    $condition: ModelSearchConditionInput
  ) {
    updateSearch(input: $input, condition: $condition) {
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
export const deleteSearch = /* GraphQL */ `
  mutation DeleteSearch(
    $input: DeleteSearchInput!
    $condition: ModelSearchConditionInput
  ) {
    deleteSearch(input: $input, condition: $condition) {
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
