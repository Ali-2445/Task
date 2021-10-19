import React,{useState} from 'react'
import {Text, View,TouchableOpacity,TextInput,Image,ActivityIndicator } from 'react-native'
import styles from './styles'
import auth from '@react-native-firebase/auth';


const Login = ({navigation}) => {

    //username state
    const [username,setUsername]=useState('')
    //password state
    const [password,setPassword]=useState('')
    //Loading state
    const [loading,setLoading]=useState(false)

    //Signin Function
    const signin=(username,password)=>{
        setLoading(true)
        if(username!='' && password!=''){
            auth().signInWithEmailAndPassword(username,password)
            .then(res=>{
                setLoading(false)
                navigation.navigate('TabBar')
                setUsername('')
                setPassword('')
            }).catch(err=>{
                setLoading(false)
                alert(err)
            })
        }else{
            alert('Fill all credentials first')
        }
    }


    //forget Password Function
    const forgetPassword=(email)=>{
        if(email==''){
            alert('Enter your email first')
        }else{
            auth().sendPasswordResetEmail(email)
            .then(res=>{
                console.log(res)
                alert('Please check your email')
            }).catch(err=>{
                alert(err)
            })
        }    
    }

    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
            </View>
            <View style={styles.bottomContainer}>
                <View style={styles.txtInputView}>
                    <View style={styles.iconContainer}>
                        <Image source={require('../../images/user.png')} style={styles.userImg}/>
                    </View>
                    <TextInput style={styles.txtInput} 
                        placeholder={'Username'} 
                        value={username} 
                        placeholderTextColor={'#fff'} 
                        onChangeText={(val)=>setUsername(val)} 
                        keyboardType={'email-address'}
                    />
                </View>

                <View style={styles.txtInputView}>
                    <View style={styles.iconContainer}>
                        <Image source={require('../../images/padlock.png')} style={styles.userImg}/>
                    </View>
                    <TextInput style={styles.txtInput} 
                        placeholder={'Password'} 
                        value={password} 
                        placeholderTextColor={'#fff'} 
                        onChangeText={(val)=>setPassword(val)}
                    />
                </View>
                <View style={styles.forgetContainer}>
                    <TouchableOpacity onPress={()=>forgetPassword(username)}>
                        <Text style={styles.forgotText}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>
                
                <TouchableOpacity style={styles.btn} disabled={loading} onPress={()=>{
                        signin(username,password)
                    }}>
                    {loading?(<ActivityIndicator size={'small'} color={'purple'}/>):(<Text style={styles.btnText}>Log In</Text>)}
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Login

