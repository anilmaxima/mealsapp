import React, { useState, useEffect, useCallback } from 'react'
import { StyleSheet, Switch, Text, View } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useDispatch } from 'react-redux';

import HeaderButton from '../components/HeaderButton'
import { setfilters } from '../store/actions/meals'
import Colors from '../constants/Colors';

const FilterSwitch = props => {
    const { navigation } = props
    return (
        <View style={styles.filterContainer} >
                <Text>{props.label}</Text>
                <Switch 
                // trackColor={{true:Colors.primaryColor}}  // both are optional
                // thumbColor={Colors.accentColor}
                value={props.state} 
                onValueChange={props.onChange} />
            </View>
    )
}

const FiltersScreen = props => {
    const [isGlutenFree,setIsGlutenFree] = useState(false)
    const [isLactoseFree,setIsLactoseFree] = useState(false)
    const [isVegan,setIsVegan] = useState(false)
    const [isVegetarian,setIsVegetarian] = useState(false)
    const dispatch = useDispatch()

    const saveFilters = useCallback(() => {
        const appliedFilters = {
            glutenFree: isGlutenFree,
            lactoseFree: isLactoseFree,
            vegan: isVegan,
            vegetarian: isVegetarian
        }
        dispatch(setfilters(appliedFilters))
    },[isGlutenFree,isLactoseFree,isVegan,isVegetarian,dispatch])

    useEffect(() => {
        navigation.setParams({save: saveFilters})
    },[saveFilters])

    return  (
        <View style={styles.screen}>
            <Text style={styles.title} > Available Filters / Restrictions </Text>
            <FilterSwitch 
            label='Gluten-free' 
            state={isGlutenFree} 
            onChange={newValue => setIsGlutenFree(newValue)} />
            <FilterSwitch 
            label='Lactose-free' 
            state={isLactoseFree} 
            onChange={newValue => setIsLactoseFree(newValue)} />
            <FilterSwitch 
            label='Vegan' 
            state={isVegan} 
            onChange={newValue => setIsVegan(newValue)} />
            <FilterSwitch 
            label='Vegetarian' 
            state={isVegetarian} 
            onChange={newValue => setIsVegetarian(newValue)} />
        </View>
    )
}

FiltersScreen.navigationOptions = navData => {
    // const mealId = navigationData.navigation.getParam('mealId')
    // const selectedMeal = MEALS.find(meal => meal.id == mealId)
    return {
    //     headerTitle: selectedMeal.title,
        headerLeft: ( 
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='menu' iconName='ios-menu' onPress={() => {
                navData.navigation.toggleDrawer()
            }} />
        </HeaderButtons>
        ),
        headerRight:( 
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title='save' 
                iconName='ios-save' 
                onPress={navData.navigation.getParam('save')} />
            </HeaderButtons>
            )
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        // backgroundColor: '#fff',
        alignItems: 'center',
        // justifyContent: 'center',
      },
      title:{
          fontFamily:'open-sans-bold',
          fontSize:18,
          margin:20,
          textAlign:'center'
      },
      filterContainer:{
          flexDirection:'row',
          justifyContent:'space-between',
          alignItems:'center',
          width:'80%',
          marginVertical:15
      }
})

export default FiltersScreen