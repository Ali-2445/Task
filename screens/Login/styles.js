import { StyleSheet,Dimensions } from "react-native"
const height=Dimensions.get('window').height
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


export default styles