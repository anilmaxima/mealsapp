import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

const MealDetailScreen = props => {
    return  (
        <View style={styles.screen}>
            <Text>this is a MealDetailScreen</Text>
            {/* <Button title='go to categoties' onPress={() => {
                props.navigation.popTOTop()
                // props.navigation.push('MealDetail')
            }}/> */}
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

export default MealDetailScreen