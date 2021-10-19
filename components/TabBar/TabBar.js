import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../../screens/Home/Home'
import Camera from '../../screens/Camera/Camera'
import Edit from '../../screens/Edit/Edit'
import { imgStyles } from './styles'

const TabBar = () => {
    const Tab=createBottomTabNavigator()
    return (
        <Tab.Navigator>
            <Tab.Screen name={'Home'} component={Home} options={{headerShown:false,tabBarShowLabel:false,tabBarIcon:({focused})=>{
                return(
                    <Image source={require('../../images/date.png')} style={imgStyles(focused)}/>
                )
            }}}/>
            <Tab.Screen name={'Edit'} component={Edit} options={{headerShown:false,tabBarShowLabel:false,tabBarIcon:({focused})=>{
                return(
                    <Image source={require('../../images/pencil.png')} style={imgStyles(focused)}/>
                )
            }}}/>
            <Tab.Screen name={'Camera'} component={Camera} options={{headerShown:false,tabBarShowLabel:false,tabBarIcon:({focused})=>{
                return(
                    <Image source={require('../../images/camera.png')} style={imgStyles(focused)}/>
                )
            }}}/>
        </Tab.Navigator>
    )
}



export default TabBar

