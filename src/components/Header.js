import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Button from './Button'
import Searchbar from '../components/Searchbar';
import { useNavigation } from '@react-navigation/native';


const Header = () => {
  const navigation= useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.profile} >
       <View style={{flexDirection:'row'}}>
        <Image style={styles.image} source={require('../assets/img/avatar.png')}/>
        <View style={styles.bio}>
          <Text style={styles.text}>Hello, Welcome🎉</Text>
          <Text style={[styles.text,{paddingTop:5}]}>Mukesh045</Text>

        </View>

       </View>
       <View style={styles.bellIcon}>
        <Button>
          <Image source={require('../assets/img/icon.png')}/>
        </Button>

       </View>
      </View>
      <TouchableOpacity onPress={()=> navigation.navigate("searchScreen")} style={styles.searchBar}>
         <Image style={styles.searchImage} source={require('../assets/img/search.png')} />
         <Text style={styles.searchText}>{'Search expert..'}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        height: '25%',
        backgroundColor:'#120be0',
    },
    profile:{
      padding:20,
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
    },
    image:{
      height:48,
      backgroundColor:'gray',
      width:48,
      borderRadius:50,
      alignSelf:'center',
    },
    bio:{
      flexDirection:'column',
      paddingLeft:10,
      paddingTop:5,
    },
    text:{
      color:'white',
      fontSize:18,

    },
    bellIcon:{
      alignSelf:'center',
    },
    searchBar:{
      flexDirection:'row',
      borderWidth:1,
      height:45,
      borderRadius:10,
      margin:10,
      borderColor:'#EDEDFC'
    },
    searchImage:{
      alignSelf:'center',
      marginHorizontal:10,
    },
    searchText:{
      alignSelf:'center',
      fontSize:16,
      color:'white'
    }
})