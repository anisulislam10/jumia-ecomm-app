import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Image, StyleSheet, Text, View,SafeAreaView } from 'react-native';

const image1 = require('../../assets/images/summary/oil.png');
const image2 = require('../../assets/images/summary/oil.png');
const image3 = require('../../assets/images/summary/frame.png');
const image4 = require('../../assets/images/summary/news.png');
const image5 = require('../../assets/images/summary/dot.png');

const ImageLayout: React.FC = () => {
    return (
      <><><><View style={styles.container}>
            <View style={styles.row}>
                <Image source={image1} style={styles.image} />
                <Image source={image2} style={styles.image} />
            </View>
            <Image source={image3} style={styles.image} />
        </View>
            <View style={styles.newsContainer}>
                <Image source={image4} style={styles.newsImage} />

            </View></>
            <View style={styles.dotContainer}>
                <Image source={image5} style={styles.dotImage} />
                <Image source={image5} style={styles.dotImage} />
                <Image source={image5} style={styles.dotImage} />
                <Image source={image5} style={styles.dotImage} />
                <Image source={image5} style={styles.dotImage} />
                <Image source={image5} style={styles.dotImage} />

            </View></><View style={styles.newsContainer}>
                <Image source={image4} style={styles.newsImage2} />

            </View><View style={styles.dotContainer}>
                <Image source={image5} style={styles.dotImage2} />
                <Image source={image5} style={styles.dotImage2} />
                <Image source={image5} style={styles.dotImage2} />
                <Image source={image5} style={styles.dotImage2} />
                <Image source={image5} style={styles.dotImage2} />
                <Image source={image5} style={styles.dotImage2} />

            </View></>
            
    );
  };
const summary = () => {
    return (
        <View style={styles.PageContainer}>
            <View style={styles.topBarContainer}>
                <View style={styles.topBar}>
                    <Text style={styles.textFollowing}>Following</Text>
                    <Text style={styles.textExplore}>Explore</Text>
                </View>
                <View style={styles.searchContainer}>
                    <Image 
                        source={require('./../../assets/images/summary/search.png')} 
                        style={styles.searchButtonIcon} 
                    />
                </View>
                
          
           </View>
           <View style={styles.TextContainer}>
            <Text style={styles.textNewProducts}>New Products</Text>
           </View>
           <SafeAreaView style={styles.appContainer}>
      <ImageLayout />
    </SafeAreaView>
  
        </View>
    );
};

const styles = StyleSheet.create({
    PageContainer: {
        display: 'flex',
        marginTop: 10,
    },
    topBarContainer: {
        height: 30,
        flexDirection: 'row',
        backgroundColor: '#FFD480',
        marginRight: 90,
        marginLeft: 20,
        borderRadius: 3,
    },
    topBar: {
        flexDirection: 'row',
        backgroundColor: '#FFD480',
        marginLeft: 30,
    },
    textFollowing: {
        flexDirection: 'row',
        textAlign: 'center',
        color: 'black',
        paddingRight: 30,
        paddingTop: 5,
    },
    textExplore: {
        backgroundColor: '#FF9900',
        textAlign: 'center',
        borderRadius: 5,
        width: 70,
        marginTop: 2,
        alignContent: 'center',
        alignItems: 'center',
        paddingTop: 2,
        fontSize: 15,
        height: 25,
        color: 'white',
    },
    searchContainer: {
        backgroundColor:'orange',
        justifyContent: 'center',
        alignItems: 'center',
        width: 45,
        height: 25,
        borderRadius: 5,
        marginLeft: 90,
        marginTop: 5,

        // marginRight:50
    },
    searchButtonIcon: {
        width: 15,  // Set the width for the image
        height: 15,  // Set the height for the image
        // backgroundColor:'green',
        // marginRight:-200,
        // borderRadius:10
    },
    TextContainer:{
// backgroundColor:'lightgreen',
width:120,
height:50,
marginLeft:23
    },
    textNewProducts:{
        marginTop:20,
color:'black',
fontSize:15,
fontWeight:'bold'
    },
    appContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
     
      },
      container: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        // backgroundColor:'red',
        height:200,
        marginTop:210,
        width:300,
        marginLeft:-30,
      },
      row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft:-3
      },
      image: {
        width: 140,
        height: 100,
        margin: 3,
      },
      newsContainer:{
// backgroundColor:'lightgreen',
width:10,
height:10,
marginLeft:-320,

      },
      newsImage:{
backgroundColor:'lightgreen',
marginTop:30

      },
      dotContainer:{
height:1,
width:100,
display:'flex',
flexDirection:'row',
marginLeft:50
      },
      dotImage:{
marginTop:160,
marginLeft:1,
paddingLeft:10
      },
      newsImage2:{
        backgroundColor:'lightgreen',
        marginTop:200,
        
      },
      dotImage2:{
        marginTop:331,
        marginLeft:1,
        paddingLeft:10,
        // backgroundColor:'orange'
      }
});

export default summary;
