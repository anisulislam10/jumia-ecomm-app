import React from "react";
import { StyleSheet } from 'react-native';
import { Image,View, Text } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const splashScreen = () => {
    return (
      <View style={styles.container} >
      
  
<View style={styles.logoimageContainer}>
    <Image source={require('./../../assets/images/splash/launch_screen.png')} style={styles.logo} />
    <Text style= {styles.title}>WELCOME</Text>
    <Text style= {styles.text}>shop just - one click</Text>
    <Text style= {styles.subText}>skip</Text>


      </View>
        </View>
    );
};
const styles=StyleSheet.create({
container:{
 
  justifyContent:'center',
  alignItems:'center',
  backgroundColor:'ofwhite'
},
title:{
fontSize:40,
fontWeight:'bold',
color:'orange',
textAlign:'center',
marginTop:80,

},
text:{
  backgroundColor:'orange',
  color:'black',
  fontSize:20,
  marginTop:80,
  textAlign:'center',
  textShadowColor:'black',
  backfaceVisibility:'visible',
  fontWeight:'bold'
  
},
logoimageContainer:{
},
logo:{
marginTop:40,
},
subText:{
  backgroundColor:'white',
  marginBottom:220,
  marginLeft:30,
  marginTop:200,
  fontSize:16,


}
});

export default splashScreen;
