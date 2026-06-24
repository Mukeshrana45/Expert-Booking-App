import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback } from 'react'
import Searchbar from '../components/Searchbar';
const SearchScreen = () => {
    const onChange=useCallback((text) => {
       console.log("Search ",text);
    },[]);
  return (
    <View style={styles.container}>
        <View style={styles.searchContainer}>
         <Searchbar onChange={onChange} />
        </View>
        <View style={styles.subContainer} >
            <Text>Recent Searches</Text>
            <TouchableOpacity style={styles.clearButton}><Text style={styles.clearText}>clear</Text></TouchableOpacity>

        </View>
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
      container:{
        flex:1,
        backgroundColor:'white',
      },
      searchContainer:{
        backgroundColor:'#2918ed',
        height:65,
        alignItems:'center',
      },
      subContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10,
      },
      clearButton:{
        
      },
      clearText:{
        color:'#4617f2',
        fontWeight:'bold',
      }
})