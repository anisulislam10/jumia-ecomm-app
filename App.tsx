import { View,Text } from "react-native";
// import MainNavigation  from "./src/navigation/main.nevigation"
import React from "react";
import SplashScreen from "./src/screens/splash.screen";
import PaymentSuccessScreen from "./src/screens/payment.successfull";
import Address from './src/screens/address';
const App = ()=>{
    return(
        <View>
            {/* <SplashScreen/> */}
            {/* <PaymentSuccessScreen/> */}
            <Address/>
        </View>
    )
}
export default App