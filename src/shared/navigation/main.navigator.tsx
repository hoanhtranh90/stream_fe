import React from 'react';
import {View,Text} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from 'app/modules/dashboard/index';
import PlayScreen from 'app/modules/watchScreen';
import Playlist from 'app/modules/Playlist';
import TabMainStackNavigator from './TabMain.navigation';
import DashBoard from 'app/modules/dashboard/index';
const Stack = createStackNavigator();

const MainNavigator = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="TabMain" component={TabMainStackNavigator} />
  </Stack.Navigator>
);

export default MainNavigator;
