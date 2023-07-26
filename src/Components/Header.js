import { useNavigation } from "@react-navigation/native"
import { SafeAreaView, StyleSheet, Text, Touchable, TouchableOpacity, View } from "react-native"

import { useSelector } from "react-redux"
const Header = ()=>{
    const navigation = useNavigation()
    const item = useSelector(state=>state.cart)
    return(

        <SafeAreaView style={styles.container}>
      
<View style={styles.nav}>
    <Text>Home</Text>
    <TouchableOpacity onPress={()=>navigation.navigate("CartItem")} style={styles.btn}>
        <Text style={styles.btntext}>Cart{item.length}</Text>
    </TouchableOpacity>
</View>
        
</SafeAreaView>
    )
}

export default Header
const styles = StyleSheet.create({
    container:{
        backgroundColor:'skyblue'
      },
nav:{
    height:50,
    backgroundColor:"skyblue",
    width:"100%",
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:10,
    alignItems:'center'
},
btn:{
    backgroundColor:'tomato',
    width:100,
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
    padding:5

},
btntext:{
    color:'white',
    fontSize:12,
}

})

