import React,{useEffect,useState} from 'react'
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'

const Home = () => {

    const [data,setData]=useState('')
    const [properties,setProperties]=useState([])
    const fetchData=()=>{
        fetch('https://mocki.io/v1/bb60571e-cac0-4ecd-95a9-2950dd376008',{
            method:'GET',
            headers:{
                'Content-Type': 'application/json',
                Accept:'application/json'
            }
        }).then(res=>res.json())
        .then(js=>{
            // console.log(js)
            setData(js)
            setProperties(Object.getOwnPropertyNames(js))
            
        }).catch(err=>{
            console.log(err)
        })
        console.log(properties)
    }

    
    useEffect(()=>{
        fetchData()
    },[])
    return (
        <View style={styles.container}>
            <Text style={styles.location}>LOCATIONS</Text>
            <View style={styles.partition}/>
            <ScrollView style={styles.flatlistContainer}>
                {properties.map(item=>{
                    return(
                        <View key={item}>
                            <View style={styles.con}>
                                <Text style={styles.txt}>{data[item]['location']}</Text>
                            </View>  
                            <View style={styles.con}>
                                <Text style={styles.txt}>{data[item]['followers']}</Text>
                            </View>    
                        </View>    
                    )
                })}
            </ScrollView>
        </View>
    )
}

export default Home

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
        paddingVertical:20
    },
    partition:{
        backgroundColor:'#CC9C80',
        height:40,
        width:'100%'
    },
    flatlistContainer:{
        marginTop:20
    },
    con:{
        height:50,alignItems:'center',justifyContent:'center',width:'80%',alignSelf:'center',marginVertical:10,backgroundColor:'#ACDF87'
    },
    txt:{
        color:'black',fontSize:18,fontWeight:'600'
    }
})
