import React, { useState, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { Surface, Title, Paragraph, ActivityIndicator, Button } from 'react-native-paper'
import { Auth } from 'aws-amplify'


export const HomeScreen = ({navigation}) => {
    const [loading, setLoading] = useState(true)
    const [appUser, setAppUser] = useState({})

    useEffect(() => {
        Auth.currentAuthenticatedUser({bypassCache: true}).then(user => {
            setAppUser(user)
            setLoading(false)
            console.log(appUser.attributes.email)
        })
    }, [])
    

    return (
        <View style={{height: '100%'}}>
            <View style={styles.view}>
            { loading ? <ActivityIndicator animating={true} /> : <Surface style={styles.surface}> 
                    <Title>
                        FUCK YEAH {appUser.attributes.email}
                    </Title>
                    <Paragraph>
                        jksbdfksa sadjk sdf s fdu ks;kfj;ks.eh fS efh SEK .KSJHG .k
                    </Paragraph>
            </Surface>}
                    <Button onPress={() => navigation.navigate('SearchForm')}>
                        Search Now
                    </Button>
            </View>
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
      width: '50%',
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 4,
    },
  });