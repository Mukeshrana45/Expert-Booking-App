import { View, Text } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { OtpInput } from "react-native-otp-entry";
import Button from '../components/Button';

const OtpVerification = ({route}) => {
    const {mobileNumber}=route?.params;
    const [counter, setCounter]=useState(30);
    const navigation = useNavigation();
    const countDown=useCallback(() => {
        if(counter>0){
            setCounter(counter =>counter-1);
        }
    },[])
    useEffect(() => {
        const timer =setInterval(countDown,1000);
        return () => clearInterval(timer);
    },[counter]);
    const onChangeText =useCallback((text) => {

    },[])
    const onOTPFilled= useCallback((text) => {
        console.log("Recived",text);
        navigation.navigate("homeScreen");
    },[]);
  return (
    <View style={{flex:1,backgroundColor:'white'}}>
        <View style={{marginTop:20,justifyContent:'center',alignItems:'center'}}>
          <Text style={{}}>{mobileNumber}</Text>
        </View>
        <View style={{marginTop:20}}>
            <OtpInput numberOfDigits={6} onTextChange={onChangeText} onFilled={onOTPFilled} />
        </View>
        {counter>0 && <Text style={{alignSelf:'center',marginTop:20}}>Resend OTP in {counter}s</Text>}
        {counter <=0 && <Button style={{}} ><Text style={{fontSize:14,color:'#e00b0b'}}>Resend</Text></Button>}
      
    </View>
  )
}

export default OtpVerification