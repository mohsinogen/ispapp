import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from './src/utils/colors';
import {NavigationContainer} from '@react-navigation/native';
import MainContainer from './src';
import EStyleSheet from 'react-native-extended-stylesheet';
import { NativeBaseProvider, Box } from "native-base";


EStyleSheet.build()
const App = () => {
  return (
    <NavigationContainer>
      <NativeBaseProvider><MainContainer /></NativeBaseProvider>
    </NavigationContainer>
  );
};

export default App;


