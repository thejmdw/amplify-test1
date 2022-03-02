import React, { useEffect, useContext, useState, useRef } from 'react';
import { View, SafeAreaView, StyleSheet, ActivityIndicator } from 'react-native';
import { SearchResultsList } from '../components/SearchResultsList';
import { HouseList} from '../screens/Carousel';
import { SearchContext } from '../providers/SearchProvider'
import Carousel from 'react-native-snap-carousel';
import { SearchResultsCard } from '../components/SearchResultsCard';
import Swiper from 'react-native-deck-swiper'
import { FAB, Text, Modal, Portal, Card } from 'react-native-paper';


const fakeListings= [
    {
        property_id: "1",
        address: {
            line: "main street 1"
        }
    },
    {
        property_id: "2",
        address: {
            line: "main street 2"
        }
    },
    {
        property_id: "3",
        address: {
            line: "main street 3"
        }
    },
    {
        property_id: "4",
        address: {
            line: "main street 4"
        }
    },
    {
        property_id: "5",
        address: {
            line: "main street 5"
        }
    },
    {
        property_id: "6",
        address: {
            line: "main street 6"
        }
    },
    {
        property_id: "7",
        address: {
            line: "main street 7"
        }
    },
    {
        property_id: "8",
        address: {
            line: "main street 8"
        }
    },
    {
        property_id: "9",
        address: {
            line: "main street 9"
        }
    },
    {
        property_id: "10",
        address: {
            line: "main street 10"
        }
    },
    {
        property_id: "11",
        address: {
            line: "main street 11"
        }
    },
    {
        property_id: "12",
        address: {
            line: "main street 12"
        }
    },
]

export const SearchResults = ({ navigation }) => {
    // const [ houses, setHouses ]= useState([])
    const [ swipedAllCards, setSwipedAllCards ] = useState(false)
    const [ cardIndex, setCardIndex ] = useState(0)
    const [ swipeDirection, setSwipeDirection ] = useState('')
    const [ cards, setCards ] = useState()
    const [ visible, setVisible ] = useState(false) 
    const [ currentListing, setCurrentListing ] = useState({})
    // const swiper = useRef()

    // const { getHouses } = useContext(SearchContext)
    const { houses, getHouses } = useContext(SearchContext)

    useEffect(() => {
        getHouses()
        // setCards(houses)
        // .then((data) => {setHouses(data.properties)})
    }, [])

    useEffect(() => {
        setCards(houses)
    }, [houses])

    // if (houses) {
    //     console.log(houses)
    // }
    console.log(houses)
    console.log('--------------')
    console.log('--------------')
    console.log('--------------')
    console.log('--------------')
    console.log('--------------')
    console.log('--------------')
    console.log(cards)

    const showModal = (index) => {
        setCurrentItem(houses[index])
        setVisible(true);
    }
    const hideModal = () => setVisible(false);
    // return (
    //     <SafeAreaView style={styles.container}>
    //         { houses ? <HouseList data={houses}/> : 
    //             <ActivityIndicator animating={true}/>}
    //     </SafeAreaView>
    // );
    const renderCard = ( card, index ) => {

        console.log(card)
        return (
        <SearchResultsCard
          id={card.property_id}
          city={card.address?.city}
          stateCode={card.address?.state_code}
          postalCode={card.address?.postal_code}
          address={card.address?.line}
          beds={card.beds}
          baths={card.baths}
          price={card.price}
          thumbnail={card.thumbnail} 
        />
      )};

    const onSwiped = (type) => {
        console.log(`on swiped ${type}`)
      }
    
    const onSwipedAllCards = () => {
        setSwipedAllCards(true)
      };

      const swipeLeft = () => {
        swiper.swipeLeft()
      };
      const swipeRight = () => {
        swiper.swipeRight()
      };
      const swipeBack = () => {
        swiper.swipeBack()
      };


        return (



               cards ? <><Swiper
                    ref={swiper => {
                        this.swiper = swiper
                    }}
                    verticalSwipe={false}
                    onSwiped={() => onSwiped('general')}
                    onSwipedLeft={() => onSwiped('left')}
                    onSwipedRight={() => onSwiped('right')}
                    // onTapCard={showModal}
                    cards={cards}
                    cardIndex={cardIndex}
                    cardVerticalMargin={0}
                    renderCard={renderCard}
                    onSwipedAll={onSwipedAllCards}
                    stackSize={1}
                    // stackSeparation={10}
                    animateOverlayLabelsOpacity
                    animateCardOpacity
                    swipeBackCard={true}
                    infinite={true}
                  >
                </Swiper>
                <View style={styles.buttons}>
                    <FAB 
                        style={styles.noButton}
                        // color="#fff"
                        icon="close"
                        onPress={swipeLeft}
                    />
                    <FAB 
                        style={styles.backButton}
                        icon="replay"
                        onPress={swipeBack}
                    />
                    <FAB 
                        style={styles.faveButton}
                        icon="heart-outline"
                        onPress={swipeRight}
                    />
                </View>
                </>
                : <Text>...Loading</Text>


        );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
    buttons: {
        display: 'flex',
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'space-between',
        bottom: 15,
        left: 63,
        // width: 20,
    },
    faveButton: {
        backgroundColor: '#76e2b3'
    },
    backButton: {
        marginHorizontal: 60,
        backgroundColor: '#f5b748'
    },
    noButton: {
        backgroundColor: '#ec5e64'
    },
    modal: {
        backgroundColor: 'white', 
        padding: 20
    },
});
