import { useEffect, useState } from "react"
import Header from "./Header"
import Item from "./Item"
const { SafeAreaView, Text, View, StyleSheet, ScrollView } = require("react-native")


const Home = ()=>{
    const[data,setData] = useState([])
useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>setData(json.map((item)=>{
        return(
            {...item,
            count:1}
        )
    })))
},[])
  return(
   <>
 <Header/>
<ScrollView>
{
    data.map(item=>{
        return(
            <Item item={item}/>
        )
    })
   }
</ScrollView>
   
   </>
  )
}
export default Home

const styles = StyleSheet.create({
 
})