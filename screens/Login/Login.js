import React,{useState} from 'react'
import { StyleSheet, Text, View,TouchableOpacity,TextInput,Dimensions,Image } from 'react-native'
import styles from './styles'

const Login = ({navigation}) => {
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
            </View>
            <View style={styles.bottomContainer}>
                <View style={styles.txtInputView}>
                    <View style={styles.iconContainer}>
                        <Image source={require('../../images/user.png')} style={styles.userImg}/>
                    </View>
                    <TextInput style={styles.txtInput} placeholder={'Username'} value={username} placeholderTextColor={'#fff'} onChangeText={(val)=>setUsername(val)}/>
                </View>

                <View style={styles.txtInputView}>
                    <View style={styles.iconContainer}>
                        <Image source={require('../../images/padlock.png')} style={styles.userImg}/>
                    </View>
                    <TextInput style={styles.txtInput} placeholder={'Password'} value={password} placeholderTextColor={'#fff'} onChangeText={(val)=>setPassword(val)}/>
                </View>
                <View style={styles.forgetContainer}>
                    <TouchableOpacity>
                        <Text style={styles.forgotText}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>
                
                <TouchableOpacity style={styles.btn} onPress={()=>{
                        navigation.navigate('TabBar')
                        setUsername('')
                        setPassword('')
                    }}>
                    <Text style={styles.btnText}>Log In</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Login

