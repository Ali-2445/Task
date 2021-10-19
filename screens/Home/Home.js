import React,{useEffect,useState} from 'react'
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import styles from './styles'


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
            console.log(js)
            setData(js)
            setProperties(Object.getOwnPropertyNames(js))
        }).catch(err=>{
            alert('Error while loading data')
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
            <View style={styles.bottomView}/>
        </View>
    )
}

export default Home

