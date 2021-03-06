/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { Card } from 'react-native-elements';

export default (props) => {
  let path = '';

  switch (props.type) {
    case 'drinkList':
      path = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
      break;
    default:
      path = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
  }

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      await fetch(path)
        .then((response) => response.json())
        .then((json) => setData(json.drinks))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    };
    fetchData();
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
                const pressOption = drink.strCategory;
                console.warn(pressOption);
              }}
            >
              <Card containerStyle={{ borderRadius: 5 }}>
                <Card.Title key={drink.idDrink}>
                  {props.type ? drink.strDrink : drink.strCategory}

                </Card.Title>
              </Card>
            </TouchableOpacity>
          ))
        )}
      </ScrollView>
    </View>
  );
};
