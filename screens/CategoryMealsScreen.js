import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

const CategoryMealsScreen = props => {
    return  (
        <View style={styles.screen}>
            <Text>this is a CategoryMealsScreen</Text>
            <Button title='go to mealdetails' onPress={() => {
                props.navigation.navigate({routeName:'MealDetail'})
                // props.navigation.push('MealDetail')
            }}/>
            <Button title='go back' onPress={() => {
                props.navigation.goBack()
                // props.navigation.pop()
            }}/>
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