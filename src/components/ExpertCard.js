import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';
const cardGap=16;
const cardWidth=(Dimensions.get('window').width-cardGap*3)/2;

const ExpertCard = ({id,name,image,specialty,...props}) => {
  const navigation= useNavigation();
  return (
    <TouchableOpacity onPress={()=>navigation.navigate("expertsDetails",{expertId:id})} style={styles.container}>
      <Image source={image} style={styles.image} />
     <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:5}}>
      <View>
       <Text style={styles.nameText}>{name}</Text>
       <Text style={{marginTop:4}}>Fee ₹{props.fee}</Text>
        </View>
       <View style={{flexDirection:'row',alignItems:'center',gap:2}}>
        <Image source={require('../assets/img/star.png')}/>
        <Text>{props.rating}</Text>
        
       </View>
       </View>
    </TouchableOpacity>
  )
}

export default ExpertCard

const styles = StyleSheet.create({
  container:{
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    width:cardWidth,
    marginBottom:16,
  },
  image:{
    width:'100%',
    height:140,
    borderTopRightRadius:10,
    borderTopLeftRadius:10,
  },
  nameText:{
    fontSize:16,
    fontWeight:'400',
  }
})