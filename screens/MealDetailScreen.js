import React, { useEffect, useCallback } from 'react'
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector, useDispatch } from 'react-redux';

import HeaderButton from '../components/HeaderButton'
import DefaultText from '../components/DefaultText';
import { toggleFavorite } from '../store/actions/meals';

const ListItem = props =>{
    return 
    <View style={styles.listitem} >
        <DefaultText>{props.children}</DefaultText>
    </View>
}

const MealDetailScreen = props => {
    const availableMeals = useSelector(state => state.meals.Meals)
    const mealId = props.navigation.getParam('mealId')
    const selectedMeal = availableMeals.find(meal => meal.id == mealId)

const dispatch = useDispatch()

const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId))
},[dispatch,mealId])

    useEffect(() => [
        // props.navigation.setParams({mealTitle:selectedMeal.title})
        props.navigation.setParams({toggleFav:toggleFavoriteHandler})
    ],[toggleFavoriteHandler])
    
    return  (
        <ScrollView>
            <Image source={{uri:selectedMeal.imageUrl}} style={styles.image} />
            <View style={styles.details}>
                <DefaultText>{selectedMeal.duration}m</DefaultText>
                <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
                <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
            </View>
            <Text style={styles.title}>Ingredients</Text>
            {selectedMeal.ingredients.map(ingredient => <ListItem key={ingredient} >{ingredient}</ListItem> )}
            <Text style={styles.title}>steps</Text>
            {selectedMeal.steps.map(step => <ListItem key={step} >{step}</ListItem> )}
        {/* <View style={styles.screen}>
            <Text>{selectedMeal.title}</Text>
            {/* <Button title='go to categoties' onPress={() => {
                // props.navigation.popTOTop()
                props.navigation.push('MealDetail')
            }}/>
        </View> */}
        </ScrollView>
    )
}

MealDetailScreen.navigationOptions = navigationData => {
    // const mealId = navigationData.navigation.getParam('mealId')
    const mealTitle = navigationData.navigation.getParam('mealTitle')
    const toggleFavorite = navigationData.navigation.getParam('toggleFav')
    // const selectedMeal = MEALS.find(meal => meal.id == mealId)
    return {
        headerTitle: mealTitle,
        headerRight: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Fava' iconName='hearto' onPress={toggleFavorite} />
        </HeaderButtons>
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      details:{
          flexDirection:'row',
          padding:15,
          justifyContent:'space-around'
      },
      image:{
          width:'100%',
          height:200
      },
      title:{
          fontFamily:'open-sans-bold',
          fontSize:18,
          textAlign:'center'
      },
      listitem:{
          marginVertical:10,
          marginHorizontal:20,
          borderColor:'#ccc',
          borderWidth:1,
          padding:10,
      }
})

export default MealDetailScreen