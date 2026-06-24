import { StyleSheet, FlatList, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useState } from 'react'
import { expertCategories } from './constants'

const Categories = ({onChangeCategory}) => {
  const [selected, setSelected]= useState(0);
  const onPress= useCallback((index)=>{
    setSelected(index)
    onChangeCategory && onChangeCategory(index);
  },[])
  const RenderItem=({name,description,index})=>{
    return(
      <TouchableOpacity onPress={()=> onPress(index)} style={[styles.categoryItem,index===selected?{backgroundColor:'#4419ed'}:{}]} >
        <Text style={index===selected && {color:'white'}}>{name}</Text>
      </TouchableOpacity>
    )
  }
  return (
    <View>
      <FlatList 
      data={expertCategories}
      horizontal={true}
      contentContainerStyle={{gap:8}}
      style={styles.flatList}
      showsHorizontalScrollIndicator={false}
      renderItem={({item,index})=> <RenderItem {...item} index={index} key={index}/>}

      />
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
  flatList:{
    padding:10,
  },
  categoryItem:{
    backgroundColor:'#E9E9FE',
    padding:10,
    borderRadius:8,
    alignSelf:'center',
  },
})