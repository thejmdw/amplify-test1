import * as React from 'react';
import {
  Text, 
  View,
  SafeAreaView } from 'react-native';

import Carousel from 'react-native-snap-carousel';
import { SearchResultsCard } from '../components/SearchResultsCard';

export const HouseList = ( { data }) => {

const carouselItems = [
          {
              title:"Item 1",
              text: "Text 1",
          },
          {
              title:"Item 2",
              text: "Text 2",
          },
          {
              title:"Item 3",
              text: "Text 3",
          },
          {
              title:"Item 4",
              text: "Text 4",
          },
          {
              title:"Item 5",
              text: "Text 5",
          },
        ]

    //   const renderItem = ({ item, index }) => {
    //     return (
    //       <View style={{
    //           backgroundColor:'floralwhite',
    //           borderRadius: 5,
    //           height: 250,
    //           padding: 50,
    //           marginLeft: 25,
    //           marginRight: 25, }}>
    //         <Text style={{fontSize: 30}}>{item.title}</Text>
    //         <Text>{item.text}</Text>
    //       </View>
    //     )
    // }


    const renderItem = ({ item, index }) => {
        return (
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
      )};


        return (
          <SafeAreaView style={{flex: 1, backgroundColor:'rebeccapurple', paddingTop: 50, }}>
            <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', }}>
                {(data) ? <Carousel
                  layout={"default"}
                  // ref={ref => this.carousel = ref}
                  data={data}
                  // sliderWidth={300}
                  // itemWidth={300}
                  renderItem={renderItem}
                  // onSnapToItem = { index => {activeIndex:index} } /> : <Text>...Loading</Text>
                /> : <Text>...Lodaing</Text>}
            </View>
          </SafeAreaView>
        );
    // }
}

