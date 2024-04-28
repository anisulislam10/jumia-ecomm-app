import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const PaymentSuccessScreen = () => {
  return (
    <View style={styles.pageStyle}>
    <View style={styles.container}>
      <Image
        source={require('./../../assets/images/paymentSuccessfull/person.png')} // Assuming you have a success icon image
        style={styles.image}
      />
      
      <View style={styles.subimg}>
      <Image
        source={require('./../../assets/images/paymentSuccessfull/Rectangle.png')} // Assuming you have a success icon image
        style={styles.sub_image}
      />
      <View >
      <Image
        source={require('./../../assets/images/paymentSuccessfull/camera.png')} // Assuming you have a success icon image
        style={styles.camera_image}
      />
      <View>
      <Image
        source={require('./../../assets/images/paymentSuccessfull/checkMark.png')} // Assuming you have a success icon image
        style={styles.CheckMark}
      />
      
      <View style={styles.doneTextCont}>
        <Text style={styles.doneText}>  DONE  </Text>

        </View>
        <View style={styles.giftBoxCont}>
      <Image
        source={require('./../../assets/images/paymentSuccessfull/giftbox.png')} // Assuming you have a success icon image
        style={styles.giftBox} />
        <Image source={require('./../../assets/images/paymentSuccessfull/giftbox1.png')} // Assuming you have a success icon image
        style={styles.giftBox1}
      />

<View style={styles.paymentSuccessfull}>
        <Text style={styles.paymentText}>  Payment Successfull  </Text>


        </View>
        
    </View>
    

    </View>
    </View>
    </View>
    </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
    pageStyle:{
        display:'flex',
backgroundColor:'orange',
// width:800,
// height:100
    },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#ffffff=',
  },
  image: {
    width: 110,
    height: 230,
    // marginBottom: 100,
    marginTop:200,
    marginStart:-250,
    // backgroundColor:'yellow',
    
  },
  text: {
    fontSize: 24,
    // fontWeight: 'bold',
    marginBottom: 10,
    color:'green'
  },
  subtext: {
    fontSize: 16,
    color: '#666666',
  },
  subimg:{
    flex: 2,
display:'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  sub_image:{
    width: 120,
    height: 240,
    // marginBottom: 100,
    marginTop:-270,
    marginStart:-10,
    // color:'FFF',
    // backgroundColor:'yellow',
    display:'flex'
    
  },
  
  camera_image:{
marginTop:-230,
marginStart:0
  },
  CheckMark:{
marginTop:30,
marginLeft:10
  },
  
  doneTextCont:{
    marginTop:100,
  },
  doneText:{
   
    marginTop: -20, 
    fontSize: 15,
    color: 'white', 
    backgroundColor: 'orange',
    paddingHorizontal: -10, 
    textAlign:'center',
    fontWeight:'bold',
    borderRadius:5

  },
  giftBoxCont:{
display:'flex',
flex:1,
flexDirection: 'row',
height:20,
width:2,


  },giftBox:{
    height:50,
    width:50,
marginTop:-65,
marginStart:-20
  },
  giftBox1:{
    height:70,
    width:70,
marginTop:-80,
marginStart:-25
  },
  paymentSuccessfull:{
    display:'flex',
    flexDirection: 'column',
    height:400,
    width:60

  },
  paymentText:{
color:'white',
fontWeight:'bold',
fontSize:20,
marginTop:120,
marginStart:-150,
backgroundColor:'orange',
borderRadius:10
  },
  
  
});

export default PaymentSuccessScreen;
