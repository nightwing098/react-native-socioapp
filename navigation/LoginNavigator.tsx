import * as React from 'react';
import { View, Text } from 'react-native';
// import AppLoading from 'expo'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { useFonts } from '@use-expo/font';

import Login from '../screens/AuthScreens/Login'
import Signup from '../screens/AuthScreens/Signup'
import Welcome from '../screens/AuthScreens/Welcome'
import StackNavigator from './StackNavigator'

const Stack = createStackNavigator();

export default function App() {
    let [fontsLoaded] = useFonts({

        'logo-font': require('../assets/fonts/Handlee-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return <View/>;
    } else {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name='Welcome' component={Welcome} options={{headerShown: false,}}/>
                    <Stack.Screen name='Login' component={Login} options={{headerShown: false, title:'Login'}}/>
                    <Stack.Screen name='Signup' component={Signup} />
                    <Stack.Screen name='StackNavigator' component={StackNavigator} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}