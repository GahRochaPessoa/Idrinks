import React, {useState} from 'react';
import {Icon, SearchBar} from 'react-native-elements';

export default SearchBar = ({search, searchFunction}) => {
  return (
    <SearchBar
      placeholder="Digite a sua busca"
      //onChangeText={searchFunction}
      //value={search}
      lightTheme
      round
    />
  );
};
