import React from 'react'
import { StyleSheet, FlatList} from 'react-native'
import { SearchResultsCard } from './SearchResultsCard'

export const SearchResultsList = ({ data }) => {

      const renderItem = ({ item }) => (
        <SearchResultsCard 
          id={item.property_id}
          city={item.address?.city}
          stateCode={item.address?.state_code}
          postalCode={item.address?.postal_code}
          address={item.address?.line}
          beds={item.beds}
          baths={item.baths}
          price={item.price}
          thumbnail={item.thumbnail} 
        />
      );

    return (
      <>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.listing_id}
        />
      </>
    );
  }

const styles = StyleSheet.create({

  });