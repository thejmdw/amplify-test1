import React from 'react'
import { View, StyleSheet, Text, ImageBackground } from 'react-native';
import { Card, Button } from 'react-native-paper' 

export const SearchResultsCard = ({address, id, city, state, postalCode, beds, baths, price, thumbnail}) => {
    return (
        <View style={styles.view}>
            <Card style={styles.card}>
                <Card.Cover source={{ uri: thumbnail}} style={styles.cover}/>
                <Text>{address} {city}, {state} {postalCode}</Text>
                {/* <Text>{postalCode}</Text> */}
                <Text>Beds: {beds}</Text>
                <Text>Baths: {baths}</Text>
                <Text>Price: ${price}</Text>
            </Card>
        </View>
    )
};

const styles = StyleSheet.create({
    // view: {
    //     flex: 1,
    //     alignItems: 'center',
    //     justifyContent: 'center', 
    //     // backgroundColor: "#663399",


    // },
    card: {
        marginTop:10,
        padding: 8,
        height: 510,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 4,
    },
    cover: {
        width: 355,
        height: 400,
    }
});