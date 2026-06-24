import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native'
import { useQuery } from '@tanstack/react-query';

const ExpertDetails = ({route}) => {
    const {expertId} =route?.params;
    const {data} =useQuery({
        queryKey:['expertById'],
        queryFn:()=>fetchExpertsById(expertId)
});
console.log("Expert",data);
  return (
  <View style={styles.container}>
         {/*<View style={styles.header}>
            <Button onPress={()=> navigation.goBack()}><Image source={require('../assets/img/back.png')}/></Button>
        </View>*/}
      <Text>{data?.name}</Text>
    </View>
  )
}

export default ExpertDetails

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
})