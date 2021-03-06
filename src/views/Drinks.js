/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from 'react';
import {
  SafeAreaView, Text, View, ScrollView, TouchableOpacity, ActivityIndicator,
} from 'react-native';
import { Card } from 'react-native-elements';

export default (props) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState(' ');
  useEffect(() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
      .then((response) => response.json())
      .then((json) => setData(json.drinks))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  return (
    <View
      style={{
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#BBBBBB',
      }}
    >
      <ScrollView
        alwaysBounceVertical
        style={{ width: '100%', height: '70%' }}
        contentContainerStyle={{ justifyContent: 'space-evenly' }}
      >
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          data.map((drink) => (
            <TouchableOpacity
              onPress={() => {
                console.warn(drink.strCategory);
              }}
            >
              <Card containerStyle={{ borderRadius: 5 }}>
                <Card.Title key={drink.strCategory}>
                  {drink.strCategory}
                </Card.Title>
              </Card>
            </TouchableOpacity>
          ))
        )}
      </ScrollView>
    </View>
  );
};
