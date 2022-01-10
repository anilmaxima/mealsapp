import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

const FiltersScreen = props => {
    return  (
        <View style={styles.screen}>
            <Text>this is a FiltersScreen</Text>
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

export default FiltersScreen