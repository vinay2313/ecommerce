import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useDispatch } from "react-redux"
import {remove,plus} from '../store/expenseSlice'
import Item from "./Item"
const CartView = ({cart})=>{
    const dispatch = useDispatch()
    const {description,id,count} = cart
  
    const handlremove = ()=>{
        dispatch(remove(id))
    }
    return(
        <>
        <View style={styles.main}>
       <View style={{flexDirection:'row'}}>
       <Image src={cart.image} style={{width:50,height:60,objectFit:'contain',borderRadius:20}}/>
            <Text style={styles.title}>{cart.title}</Text>
           
       </View>
           <View style={{flexDirection:'row',marginTop:15,justifyContent:'space-between'}}>
          
           <TouchableOpacity onPress={()=>dispatch(plus({
                ...cart,
                count:count+1
            }))} style={styles.plusbtn}>
                <Text>+</Text>
            </TouchableOpacity>
            <Text style={{fontSize:12}}>Qunatity:{count}</Text>
            <TouchableOpacity onPress={()=>{
                if(count>1)dispatch(plus({
                    ...cart,
                    count:count-1
                }))
            }} style={styles.minus}>
                <Text>-</Text>
            </TouchableOpacity>
            
           </View>
           <Text>Price:${cart.price*count}</Text>
           <TouchableOpacity  onPress={()=>handlremove(id)} style={styles.removebtn}>
                <Text style={styles.remove}>Remove</Text>
            </TouchableOpacity>
            </View>
            
           
            
        
        </>
    )
}
export default CartView
const styles =  StyleSheet.create({
main:{
    width:"90%",
    backgroundColor:"#D3D3D3",
    alignSelf:'center',
    marginTop:20,
    borderRadius:10,
    padding:10
},
title:{
    fontSize:10
},
minus:{
    backgroundColor:"green",
    width:50,
    justifyContent:'center',
    alignItems:'center'
},
remove:{
    fontSize:9
},
removebtn:{
    backgroundColor:"tomato",
    width:80,
    padding:5,
    borderRadius:10,
    marginTop:20,
},
plusbtn:{
    backgroundColor:"green",
    width:50,
    justifyContent:'center',
    alignItems:"center"
}
})