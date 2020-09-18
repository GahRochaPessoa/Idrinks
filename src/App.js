import React, { useState, useEffect } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { SearchBar } from 'react-native-elements';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import styles from './components/style';

const App = (props) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState(' ');

  useEffect(() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
      .then((response) => response.json())
      .then((json) => setData(json.drinks))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <SearchBar placeholder="search" value={search} onChangeText={setSearch} />
      <View
        style={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}
      >
        <ScrollView alwaysBounceVertical>
          {isLoading ? (
            <ActivityIndicator />
          ) : (
            data.map((drink) => (
              <Text>
                Id:
                {' '}
                {drink.idDrink}
                ) - Category:
                {' '}
                {drink.strCategory}
              </Text>
            ))
          )}
        </ScrollView>
      </View>
    </>
  );
};
export default App;
