/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from 'react';
import {
  SafeAreaView, Text, ActivityIndicator, View,
} from 'react-native';
import { Image, Divider } from 'react-native-elements';
import styles from '../components/style';

export default (props) => {
  const teste = 11007;
  const pathThumb = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${teste}`;
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      await fetch(pathThumb)
        .then((response) => response.json())
        .then((json) => setData(json.drinks))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    };
    fetchData();
  }, []);
  /*   const pathThumb = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail&s=';
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      await fetch(pathThumb)
        .then((response) => response.json())
        .then((json) => setData(json.drinks))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    };
    fetchData();
  }, []); */
  return (
    <SafeAreaView
      style={{
        flexWrap: 'wrap',
        backgroundColor: '#BBBBBB',
        flexGrow: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}
    >
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        data
          // .filter((drink) => drink.idDrink === '')
          .map((drink, key) => {
            console.warn(drink);
            return (
              <>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    // backgroundColor: 'teal',
                    height: 130,
                    width: '100%',
                  }}
                >
                  <Image
                    key={drink.idDrink}
                    source={{ uri: drink.strDrinkThumb }}
                    style={{ width: 100, height: 100, borderRadius: 20 }}
                  />
                  <Text style={styles.textDetailDrinks}>
                    Name:
                    {' '}
                    {drink.strDrink}
                  </Text>
                </View>
                <Divider style={{ height: 1, borderWidth: 0.5, width: '100%' }} />
                <View
                  style={{
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    height: 500,
                    width: '95%',
                  }}
                >
                  <Text style={styles.textDetailDrinks}>
                    Category:
                    {' '}
                    {drink.strCategory}
                  </Text>

                  <Text style={styles.textDetailDrinks}>
                    Glass:
                    {drink.strGlass}
                  </Text>

                  <Text style={styles.textDetailDrinks}>
                    Ingredients:
                    {drink.strIngredient1}
                    {' '}
                    -
                    {drink.strIngredient2}
                    {' '}
                    -
                    {' '}
                    {drink.strIngredient3}
                    {' '}
                    -
                    {drink.strIngredient4}
                  </Text>

                  <Text style={styles.textDetailDrinks}>
                    {drink.strInstructions}
                  </Text>
                </View>
              </>
            );
          })
      )}
    </SafeAreaView>
  );
};
