import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './screens/Home'
import Camera from './screens/Camera'
import Edit from './screens/Edit'

const TabBar = () => {
    const Tab=createBottomTabNavigator()
    return (
        <Tab.Navigator>
            <Tab.Screen name={'Home'} component={Home} options={{headerShown:false,tabBarShowLabel:false,tabBarIcon:({focused})=>{
                return(
                    <Image source={require('./images/date.png')} style={{height:24,width:24,tintColor:focused?'blue':'black'}}/>
                )
            }}}/>
            <Tab.Screen name={'Edit'} component={Edit} options={{headerShown:false,tabBarShowLabel:false,tabBarIcon:({focused})=>{
                return(
                    <Image source={require('./images/pencil.png')} style={{height:22,width:22,tintColor:focused?'blue':'black'}}/>
                )
            }}}/>
            <Tab.Screen name={'Camera'} component={Camera} options={{headerShown:false,tabBarShowLabel:false,tabBarIcon:({focused})=>{
                return(
                    <Image source={require('./images/camera.png')} style={{height:24,width:24,tintColor:focused?'blue':'black'}}/>
                )
            }}}/>
        </Tab.Navigator>
    )
}

export default TabBar

