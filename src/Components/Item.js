import { Alert, Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from "react-native"
import { useDispatch,useSelector } from "react-redux"
import {add,plus} from "../store/expenseSlice"
const Item = ({item})=>{
    const cart = useSelector((state)=>state.cart)
    const dispatch = useDispatch()
const handleclick = ()=>{
    let x = cart.filter(i=>i.id===item.id)
    if(x.length){
        Alert.alert("Already Added")
        // dispatch(plus({
        //     ...item,
        //     count:x[0].count+1
        // }))
        // x=[]
    }else{
        dispatch(add(item))
    }

}
    return(
<View style={styles.main}>
<View style={styles.leftsection}>
    <Text style={styles.title}>
        {item.title}
    </Text>
    <Text style={styles.price}>
        ${item.price}
    </Text>
    <TouchableOpacity onPress={()=>handleclick(item)} style={styles.cartBtn}>
        <Text style={styles.text}>Add To Cart</Text>
    </TouchableOpacity>
</View>
<View style={styles.rightsection}>
    <Image src={item.image} style={{width:100,height:130,objectFit:'contain',borderRadius:20}}/>
</View>
</View>
    )
}
export default Item
const styles = StyleSheet.create({
main:{
    width:"90%",
    backgroundColor:"#D3D3D3",
    alignSelf:'center',
    marginTop:15,
    borderRadius:10,
    padding:10,
    flexDirection:'row',
},
rightsection:{
width:"30%"
},
leftsection:{
    width:"70%"
},
text:{
    fontSize:10
},
cartBtn:{
    backgroundColor:"green",
    borderRadius:5,
    width:120,
    padding:5,
    marginTop:12
},
title:{
   fontSize:8,
   color:'black'
}
})