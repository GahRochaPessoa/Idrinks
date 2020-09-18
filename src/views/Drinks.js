/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from 'react';
import {
  SafeAreaView, Text, View, ScrollView, TouchableOpacity, ActivityIndicator,
} from 'react-native';
import Cards from '../components/Cards';
import SearchBar from '../components/SearchBar';

export default (props) => (
  <>
    <SearchBar />
    <Cards type="drinkList" />
  </>
);
