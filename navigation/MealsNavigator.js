import React from 'react'
import { createStackNavigator,  } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
// import { DrawerItems } from 'react-navigation-drawer';

import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailScreen'
import FavoritesScreen from '../screens/FavoritesScreen'
import FiltersScreen from '../screens/FiltersScreen'

const MealsNavigator = createStackNavigator({
    // Categories: CategoriesScreen,   // this is shorthand syntex
    Categories: {
        screen:CategoriesScreen
        ,navigationOptions:{
            tabBarIcon:(tabInfo) => {
                return {
                HeaderLeft: () => <Ionicons name='ios-restaurant' size={25} color='gold' />
            }
        } 
    },
    CategoryMeals:{
        screen:CategoryMealsScreen
    },
    MealDetail:{
        screen:MealDetailScreen
    },
    Filters:({
        screen:FiltersScreen
    },{
        // navigationOptions:{
        //     drawerLable:'Filters!!!'
        // }
        defaultNavigationOptions:defaultStackNavOptionns
    })
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
        tabBarIcon:() => {
            return <Ionicons name='ios-restaurant' size={25} color='gold' />
        }
    } 
},
    Favorites: { screen:FavNavigator,navigationOptions:{
        tabBarIcon:() => {
            return <Ionicons name='heart' size={25} color='red' />
        }
    }
}
})

// const FiltersNavigator = createStackNavigator({
//     Filters:FiltersScreen
// })

const MainNavigator = createDrawerNavigator({
    Meals:{
        screen:MealsBottomTabNavigator
    },
    Filters:{
        screen:MealsNavigator
    }
},{
    contentOptions:{
        activeTintColor:Colors.accentColor,
        labelStyle:{
            fontFamily:'open-sans-bold'
        }
    }
})

// export default createAppContainer(MealsBottomTabNavigator)
export default createAppContainer(MainNavigator)