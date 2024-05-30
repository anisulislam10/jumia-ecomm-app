import { View,Text } from "react-native";
// import MainNavigation  from "./src/navigation/main.nevigation"
import React from "react";
import SplashScreen from "./src/screens/splash.screen";
import PaymentSuccessScreen from "./src/screens/payment.successfull";
import Address from './src/screens/address';
import ItemsScreen from "./src/screens/items";
import Summary2 from "./src/screens/summary2";
import Summary from "./src/screens/summary";
import SummaryItem from "./src/screens/summaryItem";
const App = ()=>{
    return(
        <View>
            {/* <SplashScreen/> */}
            {/* <PaymentSuccessScreen/> */}
            {/* <Address/> */}
            {/* <ItemsScreen/> */}
            {/* <Summary2/> */}
            {/* <Summary/> */}
            <SummaryItem/>
        </View>
    )
}
export default App