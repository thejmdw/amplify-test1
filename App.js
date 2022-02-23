import React from 'react';
import { View, Text, Button } from 'react-native'
import Amplify from 'aws-amplify';
import awsconfig from './src/aws-exports';
import { withAuthenticator } from 'aws-amplify-react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { HomeScreen } from './src/screens/Home'
import { NavBar } from './src/components/NavBar'
import { SearchForm } from './src/components/SearchForm'
import { Provider as PaperProvider } from 'react-native-paper';

Amplify.configure(awsconfig);


const App = () => {
  const Stack = createStackNavigator();

  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="Home" screenOptions={{
          header: (props) => <NavBar {...props} />
        }}>
          <Stack.Screen name="Login" component={HomeScreen} options={{title: 'SwipeHome'}} />
          <Stack.Screen name="SearchForm" component={SearchForm}/>
        </Stack.Navigator>
      </NavigationContainer>
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

