import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';

import MealList from '../components/MealList';
import { MEALS } from '../data/dummydata';
import HeaderButton from '../components/HeaderButton'

const FiltersScreen = props => {
    const favMeals = useSelector(state => state.meals.favoriteMeals)
    
    return  <MealList listData={favMeals} navigation={props.navigation} />
}

FavoritesScreen.navigationOptions = navData => {
    // const mealId = navigationData.navigation.getParam('mealId')
    // const selectedMeal = MEALS.find(meal => meal.id == mealId)
    return {
    //     headerTitle: selectedMeal.title,
        headerRight: ( <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='menu' iconName='ios-menu' onPress={() => {
                navData.navigation.toggleDrawer()
            }} />
        </HeaderButtons>
        )
    }
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