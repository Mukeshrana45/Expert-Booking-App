import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import React from 'react'
import { useQuery } from '@tanstack/react-query';
import {fetchExperts} from '../api/experts';
import ExpertCard from './ExpertCard';
import Button from './Button';
import { useNavigation } from '@react-navigation/native';

const ExpertList = ({horizontal}) => {
    const navigation =useNavigation();
    const {data,isLoading,error}=useQuery({
        queryKey:['experts'],
        queryFn: fetchExperts,
    });
    console.log("Data",data);
  return (
    <View style={styles.container}>
       {!horizontal &&  <View style={styles.header}>
        <Button onPress={()=> navigation.goBack()}><Image source={require('../assets/img/back.png')}/></Button>
        </View>}
      <FlatList 
       data={data}
       showsHorizontalScrollIndicator={false}
       horizontal={horizontal}
       style={styles.container}
       numColumns={!horizontal && 2}
       columnWrapperStyle={!horizontal && {justifyContent: 'space-between',gap: 16,}}
       contentContainerStyle={{gap:16}}
       keyExtractor={(item)=>item.id}
       renderItem={({item})=> <ExpertCard horizontal={horizontal} key={item.id}{...item}/>}
      />
    </View>
  )
}

export default ExpertList
const styles= StyleSheet.create({
     container:{
       padding:8,

     },
     header:{
        flexDirection:'row',
        backgroundColor:'white',
        height:45,
        paddingHorizontal:5,
     }
})