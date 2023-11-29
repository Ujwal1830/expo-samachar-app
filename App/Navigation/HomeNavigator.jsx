import { View, Text } from 'react-native'
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Home from '../Screens/Home';
import ReadNews from '../Screens/ReadNews';

const Stack = createStackNavigator();

export default function HomeNavigator() {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false
    }}>
        <Stack.Screen 
            name='home' component={Home}
        />
        <Stack.Screen
            name='read-news' component={ReadNews}
        />
    </Stack.Navigator>
  )
}