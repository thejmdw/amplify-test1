import React, { useState, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { Card, Title, Paragraph, ActivityIndicator, TextInput } from 'react-native-paper'
import DropDown from 'react-native-paper-dropdown'
import { stateCodes, bedsMinList, bathsMinList } from '../constants'

export const SearchForm = () => {
    const [showStateDropDown, setShowStateDropDown] = useState(false);
    const [showBedDropDown, setShowBedDropDown] = useState(false);
    const [showBathDropDown, setShowBathDropDown] = useState(false);
    const [state, setState] = useState("")
    const [bedsMin, setBedsMin] = useState(0)
    const [bathsMin, setBathsMin] = useState(0)

    return (
        <View style={styles.view}>
            <Card style={styles.surface}>
            <TextInput
                label="City"
                // value={text}
                // onChangeText={text => setText(text)}
                dense={true}
            />
            <DropDown
              label={"State"}
              mode={"outlined"}
              visible={showStateDropDown}
              showDropDown={() => setShowStateDropDown(true)}
              onDismiss={() => setShowStateDropDown(false)}
              value={state}
              setValue={setState}
              list={stateCodes}
            />
            <TextInput
                label="Zip Code"
                // value={text}
                // onChangeText={text => setText(text)}
                dense={true}
            />
            <DropDown
              label={"Beds Min"}
              mode={"outlined"}
              visible={showBedDropDown}
              showDropDown={() => setShowBedDropDown(true)}
              onDismiss={() => setShowBedDropDown(false)}
              value={bedsMin}
              setValue={setBedsMin}
              list={bedsMinList}
            />
            <DropDown
              label={"Baths Min"}
              mode={"outlined"}
              visible={showBathDropDown}
              showDropDown={() => setShowBathDropDown(true)}
              onDismiss={() => setShowBathDropDown(false)}
              value={bathsMin}
              setValue={setBathsMin}
              list={bathsMinList}
            />
            <TextInput
                label="Price Max"
                // value={text}
                // onChangeText={text => setText(text)}
                dense={true}
            />
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
      padding: 8,
      height: '80%',
      width: '90%',
    //   alignItems: 'center',
    //   justifyContent: 'center',
      elevation: 4,
    },
  });