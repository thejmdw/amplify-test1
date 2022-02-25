import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native'
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './src/aws-exports';
import { withAuthenticator } from 'aws-amplify-react-native';
import { useNavigation } from '@react-navigation/native'
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { HomeScreen } from './src/screens/Home'
import { WelcomeScreen } from './src/screens/Welcome'
import { NavBar } from './src/components/NavBar'
import { SearchProvider } from './src/providers/SearchProvider'
import { SearchForm } from './src/components/SearchForm'
import { SearchResults } from './src/screens/SearchResults'
import { Provider as PaperProvider, ActivityIndicator } from 'react-native-paper';

Amplify.configure(awsconfig);


const App = () => {
  const Stack = createStackNavigator();

  const [loading, setLoading] = useState(true)
  const [appUser, setAppUser] = useState({})
  const [firstTimeUser, setFirstTimeUser] = useState("true")

  useEffect(() => {
    Auth.currentAuthenticatedUser({bypassCache: true}).then(user => {
        if (user.attributes["custom:firstTimeUser"] === "false") {
          setFirstTimeUser("false")
        }
        setLoading(false)
        // console.log(appUser)
    })
}, [])

  return (
 loading ? <ActivityIndicator animating={true} /> :  
    <PaperProvider>
      <SearchProvider>
        <NavigationContainer>
          <Stack.Navigator 
            screenOptions={{
            header: (props) => <NavBar {...props}/>
          }}>
            { firstTimeUser === "false" ? 
            <Stack.Screen name="Home" component={HomeScreen} options={{title: 'SwipeHome'}}/> 
            : <Stack.Screen name="Welcome" component={WelcomeScreen} options={{title: 'SwipeHome'}}/> }
            <Stack.Screen name="SearchForm" component={SearchForm}/>
            <Stack.Screen name="SearchResults" component={SearchResults}/>
          </Stack.Navigator>
        </NavigationContainer>
      </SearchProvider>
    </PaperProvider>
  )
}

const signUpConfig = {
  header: 'My Customized Sign Up',
  hideAllDefaults: true,
  defaultCountryCode: '1',
  signUpFields: [
    {
      label: 'Email',
      key: 'username',
      required: true,
      displayOrder: 1,
      type: 'string'
    },
    {
      label: 'Password',
      key: 'password',
      required: true,
      displayOrder: 2,
      type: 'password'
    }
  ]
};
const usernameAttributes = 'email';

export default withAuthenticator(App, {
  signUpConfig,
  usernameAttributes
});

