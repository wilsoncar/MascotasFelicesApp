
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { HomeStack } from './navigation/stack';
import { createStackNavigator } from '@react-navigation/stack';
import { MyDrawer } from './navigation/drawer';

//import HomeScreen from './src/screens/HomeScreen';

//import DuenosScreen from './src/screens/DuenosScreen';
//import PetScreen from './src/screens/PetScreen';
//import AppointmentScreen from './src/screens/AppointmentScreen';
//import DesparasitationScreen from './src/screens/DesparasitationScreen';
//import UserScreen from './src/screens/UserScreen';

export default function App(){
  return (
    <NavigationContainer>
      {/*<HomeStack /> */}
      <MyDrawer />
    </NavigationContainer>
  )
}

