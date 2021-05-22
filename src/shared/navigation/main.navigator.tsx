import React from 'react';
import {View,Text} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from 'app/modules/dashboard/index';
import PlayScreen from 'app/modules/watchScreen';
const Stack = createStackNavigator();

const TabMain = () => {
    return (
        <View>
            <Text>Helo</Text>
        </View>
    )
  };

const MainNavigator = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="TabMain" component={Home} />
    <Stack.Screen name="PlayScreen" component={PlayScreen} />
  </Stack.Navigator>
);

export default MainNavigator;
