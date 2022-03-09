import React, { useState, useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import { Card, RadioButton, TextInput, Button, Switch, Text } from 'react-native-paper'
import {Picker} from '@react-native-picker/picker';
import { stateCodes, bedsMinList, bathsMinList } from '../constants'
import { SearchContext } from '../providers/SearchProvider'
import { Auth, API, graphqlOperation} from 'aws-amplify';
import { createSearch } from '../graphql/mutations';

export const SearchForm = ( {navigation} ) => {
    const { getHouses } = useContext(SearchContext)
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);
    const [ validation, setValidation ] = useState(true) 

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
    
    const [ city, setCity ] = useState("")
    const [ stateCode, setStateCode ] = useState("")
    const [ postalCode, setPostalCode ] = useState("")
    const [bedsMin, setBedsMin] = useState(0)
    const [bathsMin, setBathsMin] = useState(0)
    const [ priceMax, setPriceMax ] = useState("")
    // const [ type, setType ] = useState("")
    const [ type, setType ] = useState("rent")

    const search = {
        city,
        state_code: stateCode,
        postal_code: postalCode,
        beds_min: bedsMin,
        baths_min: bathsMin,
        price_max: priceMax,
        type
    }

    const validate = (search) => {
        if (search.city.length === 0) {
            setValidation(false)
        } else if (search.stateCode.length === 0) {
            setValidation(false)  
        } else if (search.postalCode.length === 0) {
            setValidation(false)
        } else {

        }
    }

    const handleSubmit = () => {
        search.city = search.city.toLowerCase()
        
        API.graphql(graphqlOperation(createSearch, {
                    input: {
                        city: search.city,
                        state_code: search.state_code,
                        postal_code: search.postal_code,
                        beds_min: search.beds_min,
                        baths_min: search.baths_min,
                        price_max: parseInt(search.price_max),
                        type: search.type
                    }
                })
            )
            getHouses(search)
                .then(() => {navigation.navigate("SearchResults")})
            
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
                    <Picker.Item key="state placeholder" label={"State"} value={"0"} />
                    { stateCodes.map(state => (
                        <Picker.Item key={state.label+" id"} label={state.label} value={state.value} />
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
                        <Picker.Item key={"beds placeholer"} label={"Beds Min"} value={"null"} />
                        { bedsMinList.map(beds => (
                            <Picker.Item key={"beds " + beds.label} label={beds.label} value={beds.value} />
                        ))}
                    </Picker>
                </View>
                <View style={styles.picker} >
                    <Picker
                        selectedValue={bathsMin}
                        onValueChange={(itemValue, itemIndex) => setBathsMin(itemValue)}
                        style={styles.pickerText}
                    >
                        <Picker.Item key={"baths placeholder"} label={"Baths Min"} value={"null"} />
                        { bathsMinList.map(baths => (
                            <Picker.Item key={"baths " + baths.label} label={baths.label} value={baths.value} />
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
            <View style={styles.radios}>
            <RadioButton.Group 
                onValueChange={value => setType(value)} 
                value={type}>
                    <View style={styles.radios}>
                    <RadioButton.Item
                        value="rent"
                        label="Rent"
                        status={ {type} === "rent" ? 'checked' : 'unchecked'}
                        />
                    <RadioButton.Item
                        value="sale"
                        label="Buy"
                        status={ {type} === "buy" ? 'checked' : 'unchecked'}
                    />
                    </View>
            </RadioButton.Group>
            {/* <Text>Rent</Text>
            <Switch value={value} onValueChange={value => setValue(value)} />
            <Text>Buy</Text> */}
            </View>
            <Button onPress={handleSubmit}>SEARCH</Button>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'  
    },
    surface: {
        padding: 8,
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
    },
    radios: {
        flex: 8,
        flexDirection: "row",
        alignItems: 'center'
    }
  });