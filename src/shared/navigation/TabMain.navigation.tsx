import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from 'app/modules/dashboard/home/home';
import Playlist from 'app/modules/Playlist';
import DashBoard from 'app/modules/dashboard';

const { Navigator, Screen } = createStackNavigator();

const TabMainStackNavigator = () => (
  <Navigator headerMode="none" initialRouteName="DashBoard">
    <Screen name="DashBoard" component={DashBoard} />
    <Screen name="Home" component={Home} />
    <Screen name="PlayList" component={Playlist} />
    {/* <Screen name="Test" component={Test} /> */}
  </Navigator>
);

export default TabMainStackNavigator;
