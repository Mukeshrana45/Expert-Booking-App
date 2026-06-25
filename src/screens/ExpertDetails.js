import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from '../components/Button';
import { useQuery } from '@tanstack/react-query';
import ExpertCard from '../components/ExpertCard';
import { fetchExpertsById } from '../api/experts';

const ExpertDetails = ({route}) => {
    const {expertId} =route?.params;
    const {data} =useQuery({
        queryKey:['expertById',expertId],
        queryFn:()=>fetchExpertsById(expertId)
});
console.log("Expert",data,expertId);
  return (
    <View style={{flex:1, backgroundColor:'white'}}>
     <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 120 }}>
      <Image source={data?.image} style={styles.image} />
      <View style={styles.infoContainer}>
        <View style={{flex:1}}>
        <Text style={styles.name}>{data?.name}</Text>
        <Text style={styles.speciality}>
          {data?.expertise}
        </Text>
      </View>

      <View style={styles.ratingContainer}>
        <Image source={require('../assets/img/star.png')} />
        <Text>{data?.rating}</Text>
        <Text style={styles.reviewText}>
          ({data?.reviews} reviews)
        </Text>
      </View>

    </View>
   <View style={styles.statsContainer}>
  <View style={styles.statItem}>
    <Image source={require('../assets/img/users.png')} style={styles.icon} />
    <Text style={styles.statValue}>{data?.clients}</Text>
    <Text style={styles.statTitle}>Clients</Text>
  </View>

  <View style={styles.statItem}>
    <Image source={require('../assets/img/trend.png')} style={styles.icon} />
    <Text style={styles.statValue}>{data?.experience}</Text>
    <Text style={styles.statTitle}>Experience</Text>
  </View>

  <View style={styles.statItem}>
    <Image source={require('../assets/img/rating.png')} style={styles.icon} />
    <Text style={styles.statValue}>{data?.rating}</Text>
    <Text style={styles.statTitle}>Rating</Text>
  </View>

  <View style={styles.statItem}>
    <Image source={require('../assets/img/review.png')} style={styles.icon} />
    <Text style={styles.statValue}>{data?.reviews}</Text>
    <Text style={styles.statTitle}>Reviews</Text>
  </View>
</View>

    <Text style={styles.heading}>About</Text>

    <Text style={styles.about}>
      {data?.about}
    </Text>

  </ScrollView>
  <View style={styles.bottomContainer}>
      <Button
          label={`Book Appointment • ₹${data?.fee}`}
          style={{backgroundColor:'#2D5BFF'}}
      />
  </View>

</View>
  )
}

export default ExpertDetails

const styles = StyleSheet.create({
   image:{
    width:'100%',
    height:260,
    borderRadius:15,
},

infoContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginTop:15,
    padding:5
},

name:{
    fontSize:24,
    fontWeight:'700',
    paddingLeft:10
},

speciality:{
    color:'gray',
    marginTop:5,
    paddingLeft:10
},

ratingContainer:{
    flexDirection:'row',
    alignItems:'center',
    gap:4,
},

statsContainer:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 30,
},

statItem:{
     width: '24%',
     alignItems: 'center',
},

statValue:{
    fontSize:18,
    fontWeight:'700',
    marginTop:8,
    textAlign:'center',
},

statTitle:{
    color:'gray',
    marginTop:4,
    textAlign:'center',
},

heading:{
    fontSize:20,
    fontWeight:'700',
    marginTop:30,
    paddingLeft:10
},

about:{
    marginTop:10,
    color:'#666',
    lineHeight:22,
    padding:10
},

bottomContainer:{
    padding:15,
    backgroundColor:'white',
},
icon: {
  width: 28,
  height: 28,
  resizeMode: 'contain',
},


})