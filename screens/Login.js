import React,{useState} from 'react'
import { StyleSheet, Text, View,TouchableOpacity,TextInput,Dimensions,Image } from 'react-native'
import { useWindowDimensions } from 'react-native'
const height=Dimensions.get('window').height

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
                        <Image source={require('../images/user.png')} style={styles.userImg}/>
                    </View>
                    <TextInput style={styles.txtInput} placeholder={'Username'} value={username} placeholderTextColor={'#fff'} onChangeText={(val)=>setUsername(val)}/>
                </View>

                <View style={styles.txtInputView}>
                    <View style={styles.iconContainer}>
                        <Image source={require('../images/padlock.png')} style={styles.userImg}/>
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

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    topContainer:{
        height:(height/100)*40,
        backgroundColor:'#CC9C80',

    },
    bottomContainer:{
        height:(height/100)*60,
        backgroundColor:'purple',
        alignItems:'center',
        paddingVertical:20
    },
    txtInputView:{
        height:50,
        width:'80%',
        marginVertical:10,
        flexDirection:'row',
        backgroundColor:'black',
        borderRadius:25
    },
    iconContainer:{
        flex:0.2,
        alignItems:'center',
        justifyContent:'center'
    },
    txtInput:{
        flex:0.8,
        fontSize:18,
        paddingHorizontal:10,
        color:'#fff'
    },
    userImg:{
        height:22,
        width:22,
        tintColor:'purple'
    },
    forgetContainer:{
        color:'#fff',
    },
    forgotText:{
        color:'#fff',
        fontSize:12,
        fontWeight:'600'
    },
    btn:{
        height:55,
        width:'80%',
        backgroundColor:'#E75480',
        alignItems:'center',
        justifyContent:'center',
        marginTop:60,
        borderRadius:25
    },
    btnText:{
        fontSize:18,
        fontWeight:'bold',
        
    }
})
