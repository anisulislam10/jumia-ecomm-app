import React, { useRef } from "react";
import { View, TextInput, Image, TouchableOpacity, StyleSheet, Text, ScrollView, ImageSourcePropType, Button } from 'react-native';

// Reusable button component
interface ButtonProps {
  onPress: () => void;
  title: string;
  color: string;
}

const CustomButton: React.FC<ButtonProps> = ({ onPress, title, color }) => (
  <TouchableOpacity style={[styles.button, { backgroundColor: color }]} onPress={onPress}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

// TypeScript definition for the CustomImage component props
interface CustomImageProps {
  source: ImageSourcePropType;
  width: number;
  height: number;
  caption: string;
}

// Reusable image component with caption
const CustomImage: React.FC<CustomImageProps> = ({ source, width, height, caption }) => (
  <View style={[styles.imageContainer, { width, height }]}>
    <Image source={source} style={styles.image} />
    <Text style={styles.imageCaption}>{caption}</Text>
  </View>
);

const ItemsScreen: React.FC = () => {
  const outerScrollViewRef = useRef<ScrollView>(null);

  const scrollToTextContainer = () => {
    outerScrollViewRef.current?.scrollTo({ y: 300, animated: true }); // Adjust the 'y' value as needed
  };

  const handleGroceryPress = () => {
    console.log('Grocery button pressed');
  };

  const handleElectronicsPress = () => {
    console.log('Electronics button pressed');
  };

  const handleBabyProductsPress = () => {
    console.log('Baby products button pressed');
  };

  return (
    <ScrollView ref={outerScrollViewRef}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Search..." />
          <TouchableOpacity onPress={() => console.log('*********Search button hitted*****')}>
            <Image
              source={require('../../assets/images/items/Group.png')}
              style={styles.icon} />
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.buttonsContainer}
        >
          <CustomButton onPress={handleGroceryPress} title="Grocery" color="#FF8500" />
          <CustomButton onPress={handleElectronicsPress} title="Electronics" color="orange" />
          <CustomButton onPress={handleBabyProductsPress} title="Baby Care Products" color="orange" />
        </ScrollView>
        <View style={styles.textContainer}>
          <Text style={styles.textFoodSupplies}>Food Supplies</Text>
          <Text style={styles.textMore}>More</Text>
        </View>

        <View style={styles.imagesContainer}>
          <CustomImage source={require('../../assets/images/items/item.png')} width={150} height={150} caption="rice and legumes" />
          <CustomImage source={require('../../assets/images/items/item.png')} width={150} height={150} caption="rice and legumes" />
        </View>
        <View style={styles.singleImageContainer}>
          <CustomImage source={require('../../assets/images/items/item.png')} width={150} height={150} caption="rice and legumes" />
        </View>


        <View style={styles.textContainer}>
          <Text style={styles.textFoodSupplies}>Food Supplies</Text>
          <Text style={styles.textMore}>More</Text>
        </View>

        <View style={styles.imagesContainer}>
          <CustomImage source={require('../../assets/images/items/item.png')} width={150} height={150} caption="rice and legumes" />
          <CustomImage source={require('../../assets/images/items/item.png')} width={150} height={150} caption="rice and legumes" />
        </View>
        <View style={styles.singleImageContainer}>
          <CustomImage source={require('../../assets/images/items/item.png')} width={150} height={150} caption="rice and legumes" />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 25,
  },
  inputContainer: {
    flexDirection: 'row',
    borderColor: '#ccc',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 100,
    marginRight: 10,
  },
  icon: {
    width: 40,
    height: 40,
    marginLeft: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 5,
    marginLeft: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  textContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  textFoodSupplies: {
    fontSize: 15,
    fontWeight: '900',
    marginTop: 16,
    marginLeft: 15,
  },
  textMore: {
    fontSize: 15,
    fontWeight: '900',
    marginTop: 16,
    marginLeft: 170,
  },
  imagesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  singleImageContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: -15,
  },
  imageContainer: {
    margin: 8,
    overflow: 'hidden',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    alignItems: 'center',
    // height: 500,
    paddingTop: 5,
    // paddingLeft:-200
    // paddingRight:10
  },
  image: {
    width: '70%',
    height: '70%',
    resizeMode: 'cover',
    backgroundColor: 'grey',
  },
  imageCaption: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'left',
    color: 'black',
    backgroundColor: 'grey',
  },
});

export default ItemsScreen;
