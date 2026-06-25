import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import AppointmentScreen from '../screens/AppointmentScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from './SettingsScreen';

const Tab = createBottomTabNavigator();

const TabIcon = ({ focused, activeIcon, inactiveIcon }) => (
  <Image
    source={focused ? activeIcon : inactiveIcon}
    style={{
      width: 24,
      height: 24,
      resizeMode: 'contain',
    }}
  />
);

export default function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 65,
          borderTopWidth: 0,
          elevation: 10,
          paddingTop: 8,
          paddingBottom: 8,
        },
      }}>

      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              activeIcon={require('../assets/img/home-filled.png')}
              inactiveIcon={require('../assets/img/home-empty.png')}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Appointment"
        component={AppointmentScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              activeIcon={require('../assets/img/appointment-filled.png')}
              inactiveIcon={require('../assets/img/appointment-empty.png')}
            />
          ),
        }}
      />

      <Tab.Screen
  name="Settings"
  component={SettingsScreen}
  options={{
    tabBarIcon: ({ focused }) => (
      <TabIcon
        focused={focused}
        activeIcon={require('../assets/img/setting-filled.png')}
        inactiveIcon={require('../assets/img/settings.png')}
      />
    ),
  }}
/>

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              activeIcon={require('../assets/img/ProfileFilled.png')}
              inactiveIcon={require('../assets/img/ProfileEmpty.png')}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}