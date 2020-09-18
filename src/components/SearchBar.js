/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { View } from 'react-native';
import { Input, Icon } from 'react-native-elements';
import styles from './style';

export default (props) => {
  const [search, setSearch] = useState(' ');
  return (
    <View style={styles.searchBarContainer}>
      <View style={styles.searchBarContentContainer}>
        <Icon
          name="menu"
          size={30}
          color="#BBBBBB"
          onPress={() => {
            console.warn('Menu');
          }}
        />
        <Input
          placeholder="Search"
          containerStyle={styles.inputSearchContent}
          rightIcon={(
            <Icon
              name="search"
              type="material"
              size={30}
              color="#BBBBBB"
              onPress={() => {
                console.warn('Pesquisar');
              }}
            />
        )}
        />
      </View>
    </View>
  );
};
