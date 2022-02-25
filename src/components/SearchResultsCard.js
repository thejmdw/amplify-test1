import React from 'react'
import { View, StyleSheet, Text } from 'react-native';
import { Card, Button } from 'react-native-paper' 

export const SearchResultsCard = ({address, id, city, state, postalCode, beds, baths, price, thumbnail}) => {
    return (
        <View style={styles.view}>
            <Card style={styles.card}>
                <Card.Cover source={{ uri: thumbnail}}/>
                <Text>{id}</Text>
                <Text>{address}</Text>
                <Text>{postalCode}</Text>
                <Text>{city}</Text>
                <Text>{state}</Text>
                <Text>{beds}</Text>
                <Text>{baths}</Text>
                <Text>{price}</Text>
                {/* <Texrt>{}</Texrt> */}
                <Button>OK</Button>
            </Card>
        </View>
    )
};

const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center', 
        backgroundColor: "#663399",


    },
    card: {
        margin:10,
        padding: 8,
        height: 500,
        width: 300,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 4,
    },
});