import { ScrollView, Text, View } from "react-native"
import { useSelector } from "react-redux"
import CartView from "./CartView"
import {remove} from '../store/expenseSlice'
const CartItem = ()=>{
    const cartitem = useSelector(state=>state.cart)

    const totalPrice = cartitem.reduce((a,b)=>{
        return a+b.price*b.count
    },0)

    return(

      <>
      <Text>Total Price: ${totalPrice}</Text>
     <ScrollView>
     {
        cartitem.map((cart)=>
        <CartView key={cart.id} cart={cart}/>
        )
      }
     </ScrollView>
      </>
    )
}
export default CartItem