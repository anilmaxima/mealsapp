import React from 'react'
import {  StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { CATEGORIES } from '../data/dummydata';
import CategoryGridTile from '../components/CategoryGridTile'

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

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
})

export default CategoriesScreen