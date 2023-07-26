import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Header from "./src/Components/Header"
import Home from "./src/Components/Home"
import { Provider } from "react-redux"
import store from "./src/store/store"
import CartItem from "./src/Components/CartItem"

const Stack  = createNativeStackNavigator()
const App = ()=>{
  return(

<Provider store={store}>
<NavigationContainer>
  <Stack.Navigator>
  <Stack.Screen name="Home" options={{headerShown:false}} component={Home}/>
<Stack.Screen name="CartItem" component={CartItem}/>
  </Stack.Navigator>
</NavigationContainer>
</Provider>
  )
}
export default App
