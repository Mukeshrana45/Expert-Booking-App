import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const SectionHeader = ({title, onPress}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>{title}</Text>
      <TouchableOpacity onPress={onPress}><Text style={styles.textButton}>See all</Text></TouchableOpacity>
    </View>
  )
}

export default SectionHeader

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        padding:10,
        justifyContent:'space-between',
    },
    textButton:{
      color:'#3710f7',

    },
    textTitle:{
     fontSize:16,
     fontWeight:'500',
    },
})