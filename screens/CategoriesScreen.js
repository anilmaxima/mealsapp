import React from 'react'
import {  StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { CATEGORIES } from '../data/dummydata';
import CategoryGridTile from '../components/CategoryGridTile'
import HeaderButton from '../components/HeaderButton'

const CategoriesScreen = props => {
    const renderGridItem =(itemData) => {
        return <CategoryGridTile title = {itemData.item.title} color = {itemData.item.color} onSelect = {() => {
            props.navigation.navigate({routeName:'CategoryMeals', params: {
                categoryId: itemData.item.id
            }
        })
        }}/>
    }
                    
    return  (
        <FlatList 
        // keyExtractor={(item,index) => item.id}   //it is for older version of reactnative
        data={CATEGORIES} 
        renderItem={renderGridItem} 
        numColumns={2}/>
        // <View style={styles.screen}>
        //     <Text>this is a CategoriesScreen</Text>
        //     <Button title='go to meals' onPress={() => {
        //         props.navigation.navigate({routeName:'CategoryMeals'})
        //         // props.navigation.replace('CategoryMeals')   //we can't go back again to back screen if we use replace
        //     }}/>
        // </View>
    )
}

CategoriesScreen.navigationOptions = navData => {
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
      },
})

export default CategoriesScreen