import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './main.navigator';
import AuthStackNavigator from './auth.navigator';
import { useSelector } from 'react-redux';
import { IRootState } from '../store';
import { navigationRef } from '../../config/root-navigation';
import { View,ActivityIndicator,Text } from 'react-native';

const AppNavigator = () => {
  const user = useSelector((state: IRootState) => state.authReducer.user);
  const isLoading = useSelector(
    (state: IRootState) => state.authReducer.isLoading
  );

  return (
    <NavigationContainer ref={navigationRef}>
      {false ? (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <ActivityIndicator size="large" color="#fff" />
          <Text >Loading...</Text>
        </View>
      ) : true ? (
        <MainNavigator />
      ) : (
        <AuthStackNavigator />
      )}
    </NavigationContainer>
  );
};

export default AppNavigator;
