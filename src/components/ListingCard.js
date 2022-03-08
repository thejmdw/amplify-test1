import React, { useState } from 'react'
import { FlatList, View, Pressable, ScrollView, StatusBar, Image, StyleSheet, Text, ImageBackground } from 'react-native';
import { Card, Button, Modal, Portal, Provider, ActivityIndicator } from 'react-native-paper' 


export const ListingCard = ({listingDetail, thumbnail}) => {
    const [visible, setVisible] = useState(false)

    const showModal = () => {
        setVisible(true)
    };
    // const hideModal = () => setVisible(false);
    // console.log(listingDetail)
    // console.log(listingDetail.photos)
    const renderItem = ({ href }) => {
        <Image style={styles.photo} source={{uri: href}}/>
    }

    return (
        <>
        <ScrollView contentContainerStyle={styles.view}>
        <Portal style={styles.card}>
            {/* <View style={styles.card}> */}
            <Modal 
                visible={visible}
                dismissable
                onDismiss={() => setVisible(false)} 
                contentContainerStyle={styles.containerStyle}
                // hasBackdrop={false}
                // hideModalContentWhileAnimating={true}
            >
                    {console.log(listingDetail.photos)}
            {/* <Text>Test</Text> */}
            {/* <Image style={styles.photo} source={{ uri: 'https://picsum.photos/700'}}/> */}
            <FlatList 
                            data={listingDetail.photos}
                            renderItem={({item}) => <Image style={styles.photo} source={{uri: item.href}}/>}
                            keyExtractor={item => item.href}
                            // horizontal={true}
                        />
            </Modal>
            {/* </View> */}
        </Portal>
            { (listingDetail) ? <Card style={styles.card}>
                <Pressable onPress={() => {showModal();}}>
                    <Card.Cover source={{ uri: thumbnail}} style={styles.cover}/>
                </Pressable>
                <Text>{listingDetail.address?.line} {listingDetail.address?.city}, {listingDetail.address?.state_code} {listingDetail.address?.postal_code}</Text>
                <Text>Neighborhood: {listingDetail.address?.neighborhood_name}</Text>
                <Text>SqFt: {listingDetail.building_size?.size} {listingDetail.building_size?.units}</Text>
                <Text>Beds: {listingDetail.beds}</Text>
                <Text>Full Baths: {listingDetail.baths_full}</Text>
                <Text>Half Baths: {listingDetail.baths_half}</Text>
                <Text>{`Price: $${listingDetail.price}`}</Text>
                <Text>Lot Size: {listingDetail.lot_size?.size} {listingDetail.lot_size?.units}</Text>
                {/* <Text>Realtor: {listingDetail.agents[0]?.name}</Text> */}
                {/* <Text>Company: {listingDetail.branding.listing_office.list_item?.name}</Text> */}
            </Card>
            : <ActivityIndicator animating={true}></ActivityIndicator>}
        </ScrollView>
        </>
    )
};

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center', 
        padding: 20
    },
    view: {
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'center', 
        // backgroundColor: "#663399",
    },
    card: {
        marginTop:10,
        padding: 8,
        height: 710,
        width: 380,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 4,
    },
    cover: {
        width: 355,
        height: 473,
    },
    modalView: {
        width: 30,
        height: 30
    },
    photo: {
        width: 355,
        height: 410,
        marginVertical: 10,
    }
});