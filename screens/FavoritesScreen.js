import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

import MealList from '../components/MealList';
import { MEALS } from '../data/dummydata';

const FiltersScreen = props => {
    const favMeals = MEALS.filter(meal => meal.id == 'm1' || meal.id == 'm2' ) 
    return  <MealList listData={favMeals} navigation={props.navigation} />
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      }
})

export default FiltersScreen