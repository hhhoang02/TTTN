/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
  Alert,
  Dimensions,
  Image,
  Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import { BottomTab } from './src/Tab/TabNavigation';
import { DefaultTheme, Provider } from 'react-native-paper';


function App(): JSX.Element {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      secondaryContainer: 'transparent',
      // Use transparent to disable the little highlighting oval
    },
  };
  return (
    <Provider theme={{version: 2}}>
      {/* <DangNhap /> */}
      <BottomTab />
    </Provider>
  );
}

const styles = StyleSheet.create({
});

export default App;
