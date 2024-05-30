import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Image, StyleSheet, Text, View } from 'react-native';

const summary2 = () => {
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
           <View style={styles.pageIconCont}>
                    <Image
                    source={require('./../../assets/images/summary/icon_shop.png')}
                    style={styles.pageIcon}
                    />
                </View>
                <View style={styles.discussContainer}>
                    <Text style={styles.discussText}>Discusses the factors that make a logo successful by analyzing the research, brainstorming, sketching, and stylistic experiments that led to its development</Text>
                
                </View>

                <View>
                  {/* <Text style={styles.iconLogin}>Login</Text> */}
                
                <TouchableOpacity onPress={() => console.log('*********Login button hitted*****')}  style={styles.iconLogin}  >
            {/* <Image
              source={require('../../assets/images/items/Group.png')}
              style={styles.iconLogin}  /> */}
               <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Sign in</Text>
          </TouchableOpacity>
          </View>
       
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
    pageIconCont:{
// backgroundColor:'red',
width:150,
marginTop:100,
marginLeft:70
    },
    pageIcon:{
// backgroundColor:'green'
// paddingLeft:50
marginLeft:75
    },
    discussContainer:{
marginTop:35,
    },
    discussText:{
marginLeft:50,
marginRight:50,
fontSize:16,
// fontFamily:'italic'
    },
    iconLogin:{
        marginTop:20,
        width:300,
        height:30,
        // marginRight:-50,
        marginLeft:20,
        backgroundColor:'orange',
        textAlign:'center',
        paddingLeft:130,
        paddingTop:2
    }

});

export default summary2;
