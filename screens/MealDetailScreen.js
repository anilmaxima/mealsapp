import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { MEALS } from '../data/dummydata';
import HeaderButton from '../components/HeaderButton'

const MealDetailScreen = props => {
    const mealId = props.navigation.getParam('mealId')
    const selectedMeal = MEALS.find(meal => meal.id == mealId)
    return  (
        <View style={styles.screen}>
            <Text>{selectedMeal.title}</Text>
            {/* <Button title='go to categoties' onPress={() => {
                // props.navigation.popTOTop()
                props.navigation.push('MealDetail')
            }}/> */}
        </View>
    )
}

MealDetailScreen.navigationOptions = navigationData => {
    const mealId = navigationData.navigation.getParam('mealId')
    const selectedMeal = MEALS.find(meal => meal.id == mealId)
    return {
        headerTitle: selectedMeal.title,
        headerRight: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Fava' iconName='hearto' onPress={() => {}} />
        </HeaderButtons>
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

export default MealDetailScreen