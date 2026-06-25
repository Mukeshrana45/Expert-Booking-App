import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import Onbording from './src/screens/Onbording';
import LoginScreen from './src/screens/LoginScreen';
import OtpVerification from './src/screens/OtpVerification';
import HomeScreen from './src/screens/HomeScreen';
import SearchScreen from './src/screens/SearchScreen';
import ExpertsList from './src/components/ExpertsList';
import ExpertDetails from './src/screens/ExpertDetails';
import BottomTab from './src/screens/BottomTab'

const Navigation = () => {
    const Stack =createNativeStackNavigator();
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Onboarding'>
            <Stack.Screen name='Onboarding' component={Onbording} options={{headerShown:false}}></Stack.Screen>
            <Stack.Screen name='loginScreen' component={LoginScreen} options={{headerShown:false}}/>
            <Stack.Screen name='OtpVerify' component={OtpVerification} />
            <Stack.Screen name='Main' component={BottomTab} options={{headerShown:false}}/>
            <Stack.Screen name='searchScreen' component={SearchScreen} options={{headerShown:false}}/>
            <Stack.Screen name='expertsList' component={ExpertsList} options={{headerShown:false}}/>
            <Stack.Screen name='expertsDetails' component={ExpertDetails} options={{title: "Expert Details",headerTitleAlign: "center",}}/>
        </Stack.Navigator>

    </NavigationContainer>
  )
}

export default Navigation

const styles = StyleSheet.create({})