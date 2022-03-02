import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Card, Avatar, ActivityIndicator, Text, Title, Button, Badge, Chip, IconButton, Colors } from "react-native-paper";
// import { Badge } from 'react-native-elements'
import { plus } from 'react-native-vector-icons'
import { Auth } from 'aws-amplify'

export const ProfileScreen = () => {
    const [ loading, setLoading ] = useState(true)
    const [ user, setUser ] = useState(undefined)

    useEffect(() => {
        Auth.currentAuthenticatedUser({bypassCache: true}).then(user => {
            setUser(user)
            setLoading(false)
            
        })
    }, [])

    console.log(user)

    return (
        user ?
            <View style={styles.view}>
                <View>
                {/* <Badge
                    // status="primary"
                    value={"+"}
                    style={{ position: 'absolute', bottom: 0, right: 10, zIndex: 1 }}
                    size={35}
                >
                    +
                </Badge> */}
                <IconButton
                    icon="camera"
                    size={25}
                    onPress={() => console.log('Pressed the fucking button')}
                    color={Colors.red900}
                    style={{ position: 'absolute', bottom: 0, right: 0, zIndex: 1, padding: 5, borderRadius: 20}}
                    />
                {/* <Chip
                    icon="camera"
                    style={{ position: 'absolute', bottom: 0, right: 10, zIndex: 1 }}/> */}
                <Avatar.Text label={user?.attributes.email.slice(0,1)} size={128} style={styles.avatar}/>
                </View>
                <Title>{user?.attributes.email}</Title>

                <View>
                    <Title>Random 5 Faves</Title>
                </View>
                <View>
                    <Title>Past 5 Messages</Title>
                </View>
                <View>
                    <Title>Past 5 Searches</Title>
                </View>
            </View>
                : <ActivityIndicator animating={true}/>
    )               
}

const styles = StyleSheet.create({
    view: {
        alignItems: 'center',
        justifyContent: 'center'  
      },
      avatar: {
          marginTop: 10,
      }
})
