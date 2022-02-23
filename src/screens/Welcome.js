import React, { useState, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { Surface, Title, Paragraph, ActivityIndicator, Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import { Auth } from 'aws-amplify'


export const WelcomeScreen = ({navigation}) => {
    const [loading, setLoading] = useState(true)
    const [appUser, setAppUser] = useState({})
    const [appUserDetails, setAppUserDetails] = useState({})
    
    const history = useNavigation()

    useEffect(() => {
        Auth.currentAuthenticatedUser({bypassCache: true}).then(user => {
            setAppUser(user)
            // setLoading(false)
            console.log(appUser)
        })
    }, [])

    useEffect(() => {
        Auth.currentAuthenticatedUser({bypassCache: true}).then(user => {
            setAppUserDetails(user)
            console.log(appUserDetails)
            setLoading(false)
        })
    }, [appUser])

    async function updateUser() {
        const user = await Auth.currentAuthenticatedUser();
        await Auth.updateUserAttributes(user, {
          'custom:firstTimeUser': 'false'
        });
      }
    

    return (
        <View style={{height: '100%'}}>
            <View style={styles.view}>
            { loading ? <ActivityIndicator animating={true} /> : <Surface style={styles.surface}> 
                    <Title>
                        WELCOME!!! {appUserDetails.attributes?.email}
                    </Title>
                    <Paragraph>
                        jksbdfksa sadjk sdf s fdu ks;kfj;ks.eh fS efh SEK .KSJHG .k
                    </Paragraph>
            </Surface>}
                    <Button onPress={() => {
                        updateUser();
                        history.reset({index: 0,
                            routes: [],});
                        navigation.navigate('SearchForm')}}>
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