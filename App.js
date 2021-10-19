import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './screens/Login/Login'
import TabBar from './components/TabBar/TabBar'

const App = () => {
  const Stack=createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={'Login'} component={Login} options={{headerShown:false}}/>
        <Stack.Screen name={'TabBar'} component={TabBar} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>  
  )
}

export default App
