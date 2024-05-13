import React, { useState } from 'react';
import { View, Text, TextInput, Button, Switch, StyleSheet, Image,TouchableHighlight } from 'react-native';

const AddressForm: React.FC = () => {
  
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [street, setStreet] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [isPrimary, setIsPrimary] = useState<boolean>(false);

  const handleSaveAddress = () => {
    // Logic to save address
  };

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.addressBarText}>Address</Text>

        <View style={styles.backButtonContainer}>
          <Image
            source={require('./../../assets/images/Address/Back.png')}
            style={styles.backButton}
          />
        </View>
      </View>

      <Text style={styles.label}>Title</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        style={styles.input}
        placeholder="Name"
      />
      <Text style={styles.label}>Phone No</Text>
      <TextInput
        value={phone}
        onChangeText={setPhone}
        style={styles.input}
        placeholder="Phone Number"
        keyboardType="phone-pad"
      />
      <Text style={styles.label}>City</Text>
      <TextInput
        value={city}
        onChangeText={setCity}
        style={styles.input}
        placeholder="City"
      />
      <Text style={styles.label}>Street</Text>
      <TextInput
        value={street}
        onChangeText={setStreet}
        style={styles.input}
        placeholder="Street"
      />
      <Text style={styles.label}>Address</Text>
      <TextInput
        value={address}
        onChangeText={setAddress}
        style={[styles.input, styles.multilineInput]}
        placeholder="Address"
        multiline={true}
        numberOfLines={4}
      />
      <View style={styles.switchContainer}>
        <Text>Save as Primary Address</Text>
        <Switch
          value={isPrimary}
          onValueChange={setIsPrimary}
        />
      </View>
    
      <TouchableHighlight onPress={() => console.log('***** Address Save Button Hitted ****')} style={styles.saveButton}>
      <Text style={styles.textSaveButton}>Save Address</Text>
    </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  textContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
  },
  addressBarText: {
    color: "#1D1E20",
    fontSize: 17,
    fontWeight: 'bold',
    marginRight: -55,
    // textAlign:'center',
    // textAlignVertical:'center'
    paddingLeft:100
    
  },
  backButtonContainer: {
    
    // marginRight:70,
  // marginRight:10
  marginLeft:-110
  },
  backButton: {
    width: 47,
    height: 47,
  },
  label: {
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  multilineInput: {
    height: 100,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  saveButton:{
    display:'flex',
    flexDirection:'row',
    backgroundColor:'yellow',
    width:300,
  },
  textSaveButton:{
    backgroundColor:'yellow',
    paddingTop:5,
    color:'black',
    textAlign:'center',
    width:300,
    fontSize:15,
    fontWeight:'bold',
    height:30,


  }
});

export default AddressForm;
