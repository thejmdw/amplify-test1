import React, { useState } from 'react';
import { Auth } from 'aws-amplify'
import { Appbar, Menu } from 'react-native-paper';

export const NavBar = ({navigation, back}) => {

  const [visible, setVisible] = useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  async function signOut() {
    try {
        await Auth.signOut();
    } catch (error) {
        console.log('error signing out: ', error);
    }
  }

  return (
    <Appbar.Header>
        <Appbar.BackAction onPress={navigation.goBack} />
        <Appbar.Content title="SwipeHome" onPress={() => navigation.navigate('Home')}/>
        <Menu
            visible={visible}
            onDismiss={closeMenu}
            anchor={
            <Appbar.Action icon="menu" color="white" onPress={openMenu} />
            }>
            <Menu.Item 
                onPress={() => navigation.navigate('SearchForm')} 
                title="Search" />
            <Menu.Item 
                onPress={signOut} 
                title="LogOut" />
        </Menu>
    </Appbar.Header>
  );
};
