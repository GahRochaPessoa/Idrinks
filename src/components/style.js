import React from 'react';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  searchBarContainer: {
    height: 70,
    width: '100%',
    backgroundColor: '#1E1E2C',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBarContentContainer: {
    height: 55,
    width: '95%',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  inputSearchContent: {
    width: '90%',
    justifyContent: 'flex-start',
    height: 50,
  },
  searchIcon: {},
  inputSearch: {},
  cardContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#BBBBBB',
  },
  scrollViewStyle: {
    width: '100%',
    height: '70%',
  },
  scrollViewContentContainer: { justifyContent: 'space-evenly' },
  textDetailDrinks: { fontSize: 20, textAlign: 'center' },
});
