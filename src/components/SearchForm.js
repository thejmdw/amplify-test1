import React, { useState, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { Card, Title, Paragraph, ActivityIndicator, TextInput, Button } from 'react-native-paper'
import {Picker} from '@react-native-picker/picker';
import { stateCodes, bedsMinList, bathsMinList } from '../constants'



export const SearchForm = ( {navigation} ) => {
    
    const [ city, setCity ] = useState("")
    const [ stateCode, setStateCode ] = useState("")
    const [ postalCode, setPostalCode ] = useState("")
    const [bedsMin, setBedsMin] = useState(0)
    const [bathsMin, setBathsMin] = useState(0)
    const [ priceMax, setPriceMax ] = useState("")

    const search = {
        city,
        bathsMin,
        postalCode,
        bedsMin,
        bathsMin,
        priceMax
    }

    return (
        <View style={styles.view}>
            <Card style={styles.surface}>
            <TextInput
                label="City"
                value={city}
                onChangeText={city => setCity(city)}
                dense={true}
                style={styles.field}
            />
            <View style={styles.picker} >
                <Picker
                    selectedValue={stateCode}
                    onValueChange={(itemValue, itemIndex) => setStateCode(itemValue)}
                    style={styles.pickerText}
                >
                    <Picker.Item label={"State"} value={"0"} />
                    { stateCodes.map(state => (
                        <Picker.Item label={state.label} value={state.value} />
                    ))}
                </Picker>
            </View>
            <TextInput
                label="Zip Code"
                value={postalCode}
                onChangeText={postalCode => setPostalCode(postalCode)}
                dense={true}
                style={styles.field}
            />
            <View>
                <View style={styles.picker} >
                    <Picker
                        selectedValue={bedsMin}
                        onValueChange={(itemValue, itemIndex) => setBedsMin(itemValue)}
                        style={styles.pickerText}
                    >  
                        <Picker.Item label={"Beds Min"} value={"null"} />
                        { bedsMinList.map(beds => (
                            <Picker.Item label={beds.label} value={beds.value} />
                        ))}
                    </Picker>
                </View>
                <View style={styles.picker} >
                    <Picker
                        selectedValue={bathsMin}
                        onValueChange={(itemValue, itemIndex) => setBathsMin(itemValue)}
                        style={styles.pickerText}
                    >
                        <Picker.Item label={"Baths Min"} value={"null"} />
                        { bathsMinList.map(baths => (
                            <Picker.Item label={baths.label} value={baths.value} />
                        ))}
                    </Picker>
                </View>
            </View>
            <TextInput
                label="Price Max"
                value={priceMax}
                onChangeText={priceMax => setPriceMax(priceMax)}
                dense={true}
                style={styles.field}
            />
            <Button onPress={() => {
                navigation.navigate("SearchResults")
                console.log(search)}}>SEARCH</Button>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        alignItems: 'center',
        justifyContent: 'center'  
    },
    surface: {
        
        padding: 10,
        height: '90%',
        width: '90%',
        justifyContent: "space-between",
        elevation: 8,
    },
    field: {
        margin: 10
    },
    picker: {
        margin: 10,
        backgroundColor: "#e7e7e7",
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        borderBottomColor: "#bfbfbf",
        borderBottomWidth: 1.6
    },
    pickerText: {
        color: "#6a6a6a"
    }
  });