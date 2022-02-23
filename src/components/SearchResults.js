import React, { useState, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { Card, Text, Title, Paragraph, ActivityIndicator, TextInput, Button } from 'react-native-paper'
import {Picker} from '@react-native-picker/picker';
import { stateCodes, bedsMinList, bathsMinList } from '../constants'



export const SearchResults = ({ navigation }) => {
    
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
            <Text>SEARCH RESULTS</Text>
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