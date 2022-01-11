import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { CATEGORIES, MEALS } from '../data/dummydata';
import MealItem from '../components/MealItems';

const CategoryMealsScreen = props => {
    const renderMealItem = itemData => {
        return <MealItem title={itemData.item.title} 
        image={itemData.item.imageUrl}
        duration={itemData.item.duration} 
        affordability={itemData.item.affordability}
        complexity={itemData.item.complexity}
        onSelectMeal={() => {}} />
    }
    const catId = props.navigation.getParam('categoryId')

    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0)

    // const selectedCategory = CATEGORIES.find(cat => cat.id == catId)

    return  (
        <View style={styles.screen}>
            <FlatList data={displayedMeals} renderItem={renderMealItem} style={{width:'100%'}} />
            
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      }
})

export default CategoryMealsScreen