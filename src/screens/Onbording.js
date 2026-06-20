import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import Button from '../components/Button';

const Onbording = () => {
  return (
    <View style={{flex:1}}>
        <ImageBackground source={require('../assets/img/splash.png')} style={{flex:1, justifyContent: 'center'}}>
       <View style={{flex:0.6,justifyContent:'center',marginTop:120,alignItems:'center'}}>
        <Image source={require('../assets/img/expert.png')} style={styles.image} resizeMode='contain'>
        </Image>

       </View>
       <View style={{flex:0.45,backgroundColor:'white',borderTopLeftRadius:20,borderTopRightRadius:20}}>
         <View style={{justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:24,fontWeight:'bold',paddingVertical:10}}>Connect with Top Experts</Text>
            <Text style={{fontSize:18,paddingVertical:10,alignSelf:'center',paddingHorizontal:10,textAlign:'center',color:'gray'}}>Book one-on-one sessions with verified professionals anytime, anywhere.</Text>
         </View>
        
       </View>
       <View style={{bottom:0,position:'absolute',width:'100%',padding:10}}>
         <Button label={"Get Started"} style={{backgroundColor:'#0b0ff7'}} />
       </View>
        </ImageBackground>
    </View>
  )
}

export default Onbording

const styles = StyleSheet.create({
    image:{
        width:'100%',
        height: 900,
    }
})