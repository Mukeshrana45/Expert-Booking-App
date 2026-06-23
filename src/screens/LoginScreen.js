import { ImageBackground ,StyleSheet, Text, View,Image, TextInput } from 'react-native'
import React, { useCallback, useState } from 'react'
import Button from '../components/Button';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const [mobileNumber, setMobileNumber] = useState('');
   const navigation = useNavigation();
  const onPressLogin= useCallback(() => {
    if(mobileNumber?.length=== 10){
      navigation.navigate("OtpVerify",{mobileNumber:mobileNumber,});
    }

  },[mobileNumber]);
  return (
    <View style={{flex:1}}>
        <View style={{flex:1,justifyContent: 'center',backgroundColor:'#300aec'}} >
       <View style={{flex:0.6,justifyContent:'center',marginTop:20,alignItems:'center'}}>
        <Image source={require('../assets/img/facility.png')} style={{width:'100%',height:'100%'}} resizeMode='contain' />

       </View>
       <View style={{flex:0.45,backgroundColor:'white',borderTopLeftRadius:20,borderTopRightRadius:20}}>
         <View style={{justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:24,fontWeight:'bold',paddingVertical:10}}>Log in or Sign up</Text>
         </View>
         <View style={{flexDirection:'row',height:50,borderColor:'gray',borderWidth:1,alignItems:'center',margin:10 ,borderRadius:10 }}>
          <Text style={{fontSize:18,paddingHorizontal:10}} >{'+91'} </Text>
          <TextInput style={{padding:10,fontSize:18}} onChangeText={setMobileNumber} keyboardType='numeric' placeholder='Phone Number' maxLength={10} />
           

         </View >
         <View style={{width:'100%',paddingVertical:15, paddingHorizontal:10}}>
         <Button onPress={onPressLogin} label={"Login with Mobile"} style={{backgroundColor:'#0b0ff7'}} />
        </View>
       </View>
       <View style={{bottom:0,position:'absolute',width:'100%',padding:10}}>
        <Button style={{backgroundColor:'#e5e4ef',flexDirection:'row',gap:4,borderColor:'black',borderWidth:1}}>
          <Image source={require('../assets/img/google_icon.png')} />
          <Text style={{color:'black',fontSize:18}}>Continue with Google</Text>

        </Button>
       </View>
        </View>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
})