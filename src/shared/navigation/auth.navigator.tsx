import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../../modules/auth/index';

const { Navigator, Screen } = createStackNavigator();

const AuthStackNavigator = () => (
  <Navigator headerMode="none">
    <Screen name="login" component={LoginScreen} />
  </Navigator>
);

export default AuthStackNavigator;
