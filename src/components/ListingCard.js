import React from 'react'
import { View, StyleSheet, Text, ImageBackground } from 'react-native';
import { Card, Button } from 'react-native-paper' 

export const ListingCard = ({listing}) => {
    return (
        <View style={styles.view}>
            <Card style={styles.card}>
                <Card.Cover source={{ uri: listing.thumbnail}} style={styles.cover}/>
                <Text>{listing.line?.address} {listing.line?.city}, {listing.line?.state_code} {listing.line?.postal_code}</Text>
                {/* <Text>{postalCode}</Text> */}
                {/* <Text>Beds: {listing.beds}</Text>
                <Text>Baths: {listing.baths}</Text> */}
                <Text>{`Price: $${listing.price}`}</Text>
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
        height: 410,
    }
});