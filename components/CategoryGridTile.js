import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'

const CategoryGridTile = props => {
    return (
        <TouchableOpacity style={styles.griditems} 
            onPress={props.onSelect}>
        <View style={{...styles.container,...{backgroundColor:props.color}}} >
            <Text style={styles.title} numberOfLines={2}>{props.title}</Text>
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    griditems:{
    flex:1,
    margin:15,
    height:150,
},
container:{
    flex:1,
    borderRadius:10,
    shadowOpacity:0.26,
    shadowColor:'black',
    shadowOffset:{width:0,height:2},
    shadowRadius:10,
    elevation:3,
    padding:15,
    justifyContent:'flex-end',
    alignItems:'flex-end'
},
title:{
    fontFamily:'open-sans-bold',
    fontSize:20
}
})

export default CategoryGridTile