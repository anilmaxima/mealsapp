import React from 'react'
import { createStackNavigator,  } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailScreen'
import FavoritesScreen from '../screens/FavoritesScreen'



const MealsNavigator = createStackNavigator({
    // Categories: CategoriesScreen,   // this is shorthand syntex
    Categories: {
        screen:CategoriesScreen
    },
    CategoryMeals:{
        screen:CategoryMealsScreen
    },
    MealDetail:{
        screen:MealDetailScreen
    }
})

const FavNavigator = createStackNavigator({
    Favorites:{
        screen:FavoritesScreen
    },
    MealDetail:{
        screen:MealDetailScreen
    }
})

const MealsBottomTabNavigator = createMaterialBottomTabNavigator({
    Meals:{screen: MealsNavigator,navigationOptions:{
        tabBarIcon:(tabInfo) => {
            return <Ionicons name='ios-restaurant' size={25} color='gold' />
        }
    } 
},
    Favorites: { screen:FavNavigator,navigationOptions:{
        tabBarIcon:(tabInfo) => {
            return <Ionicons name='heart' size={25} color='red' />
        }
    }
}
})

export default createAppContainer(MealsBottomTabNavigator)