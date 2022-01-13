import React from 'react'
import { StyleSheet, FlatList, View } from 'react-native'
import MealItem from './MealItems'

const MealList = (props) => {

    const renderMealItem = itemData => {
        return <MealItem title={itemData.item.title} 
        image={itemData.item.imageUrl}
        duration={itemData.item.duration} 
        affordability={itemData.item.affordability}
        complexity={itemData.item.complexity}
        onSelectMeal={() => {
            props.navigation.navigate({routeName:'MealDetail', params: {
                mealId: itemData.item.id,
                mealTitle:itemData.item.title
            }
        })
        }} />
    }

    return (
    <View style={styles.list}>
        <FlatList data={props.listData} renderItem={renderMealItem} style={{width:'100%'}} />    
    </View>
    )}

const styles = StyleSheet.create({
    list:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default MealList