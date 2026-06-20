import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import Onbording from './src/screens/Onbording'

const Navigation = () => {
    const Stack =createNativeStackNavigator();
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Onboarding'>
            <Stack.Screen name='Onboarding' component={Onbording} options={{headerShown:false}}></Stack.Screen>
        </Stack.Navigator>

    </NavigationContainer>
  )
}

export default Navigation

const styles = StyleSheet.create({})