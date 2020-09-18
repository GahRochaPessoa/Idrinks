/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { View } from 'react-native';
import { Input, Icon } from 'react-native-elements';

export default (props) => {
  const [search, setSearch] = useState(' ');
  return (
    <View
      style={{
        height: 70,
        width: '100%',
        backgroundColor: '#1E1E2C',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <View
        style={{
          height: 55,
          width: '95%',
          borderRadius: 10,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}
      >
        <Icon
          name="menu"
          size={30}
          color="#BBBBBB"
          onPress={() => {
            console.warn('Salve');
          }}
        />
        <Input
          placeholder="Search"
          containerStyle={{
            width: '90%',
            justifyContent: 'flex-start',
            height: 50,
          }}
          rightIcon={{ type: 'material', name: 'search', color: '#BBBBBB' }}
        />
      </View>
    </View>
  );
};
