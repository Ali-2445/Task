import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    location:{
        alignSelf:'center',
        fontSize:22,
        fontWeight:'600',
        color:'black',
        marginBottom:10
    },
    container:{
        flex:1,
        paddingTop:20
    },
    partition:{
        backgroundColor:'#CC9C80',
        height:35,
        width:'100%'
    },
    flatlistContainer:{
        marginTop:20
    },
    con:{
        height:50,
        alignItems:'center',
        justifyContent:'center',
        width:'80%',
        alignSelf:'center',
        marginVertical:3,
        backgroundColor:'#ACDF87'
    },
    txt:{
        color:'black',
        fontSize:18,
        fontWeight:'600'
    },
    bottomView:{
        position:'absolute',
        bottom:0,
        width:'100%',
        height:8,
        backgroundColor:'#CC9C80'
    }
})

export default styles
