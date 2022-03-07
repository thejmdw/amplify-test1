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
    const swiper = useRef(null)

    // const { getHouses } = useContext(SearchContext)
    const { houses, getHouses, setListing } = useContext(SearchContext)

    useEffect(() => {
        getHouses()
    }, [])

    useEffect(() => {
        setCards(houses)
    }, [houses])

    const showModal = (index) => {
        setCurrentItem(houses[index])
        setVisible(true);
    }
    const hideModal = () => setVisible(false);

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
          bathsFull={card.baths_full}
          bathsHalf={card.baths_half}
          price={card.price}
          thumbnail={card.thumbnail} 
        />
      )};
    
    const onSwipedAllCards = () => {
        setSwipedAllCards(true)
        setCardIndex(0)
      };

      const swipeLeft = () => {
        swiper.current.swipeLeft()
      };
      const swipeRight = () => {
        swiper.current.swipeRight()
      };
      const swipeBack = () => {
          setCardIndex(cardIndex - 1)
        swiper.current.swipeBack()
      };

      const goToListing = (array, index) => {
        setListing(array[index])
           navigation.navigate("Listing")
      }


        return (
               cards ? <View style={styles.container}><Swiper
                    backgroundColor={'#9f9f9f'}
                    ref={swiper}
                    onSwipedRight={() => { console.log(`swiped card index: ${cardIndex}`); setCardIndex(cardIndex + 1);}}
                    onSwipedLeft={() => {console.log(`swiped card index: ${cardIndex}`); setCardIndex(cardIndex + 1);}}
                    verticalSwipe={false}
                    cards={cards}
                    cardIndex={cardIndex}
                    cardVerticalMargin={0}
                    renderCard={renderCard}
                    onTapCard={() => {goToListing(cards, cardIndex)}}
                    onSwipedAll={onSwipedAllCards}
                    stackSize={2}
                    stackSeparation={10}
                    animateOverlayLabelsOpacity
                    animateCardOpacity
                    swipeBackCard={true}
                    // showSecondCard={false}
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
                </View>
                : <Text>...Loading</Text>


        );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
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
