/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { NavigationContainer } from '@react-navigation/native';
/* import { Input } from 'react-native-elements'; */

import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { color } from 'react-native-reanimated';
import { Card } from 'react-native-elements';
import Cards from './components/Cards';
import SearchBar from './components/SearchBar';
import styles from './components/style';

const App = (props) => {
  const [search, setSearch] = useState(' ');

  return (
    <>
      <SearchBar />
      <Cards />

    </>
  );
};
export default App;
