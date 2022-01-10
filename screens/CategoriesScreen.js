import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

const CategoriesScreen = props => {
    return  (
        <View style={styles.screen}>
            <Text>this is a CategoriesScreen</Text>
            <Button title='go to meals' onPress={() => {
                props.navigation.navigate({routeName:'CategoryMeals'})
                // props.navigation.replace('CategoryMeals')   //we can't go back again to back screen if we use replace
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

export default CategoriesScreen