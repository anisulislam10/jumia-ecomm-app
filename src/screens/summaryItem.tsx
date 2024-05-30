import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Image, StyleSheet, Text, View } from 'react-native';
const image1 = require('../../assets/images/summary/oil.png');


const summaryItem = () => {
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

            <View style={styles.itemContainer}>
                <View style={styles.Item}>
                    <Image source={image1} style={styles.image1} />
                    <Text style={styles.header}>Oil</Text>
                    <Text style={styles.subHeader}>
                        Discusses the factors that make a logo successful by analyzing the research,
                    </Text>
                </View>
                <View style={styles.priceAndButtonContainer}>
                    <Text style={styles.rateText}>129$</Text>
                    <Text style={styles.discountRate}>150$</Text>
                    <View style={styles.colorCont}>
                        <Image 
                            source={require('./../../assets/images/summary/shopping_cart.png')} 
                            style={styles.shopingCart} 
                        />
                    </View>
                </View>
            </View>

            <View style={styles.itemContainer}>
                <View style={styles.Item}>
                    <Image source={image1} style={styles.image1} />
                    <Text style={styles.header}>Oil</Text>
                    <Text style={styles.subHeader}>
                        Discusses the factors that make a logo successful by analyzing the research,
                    </Text>
                </View>
                <View style={styles.priceAndButtonContainer}>
                    <Text style={styles.rateText}>129$</Text>
                    <Text style={styles.discountRate}>150$</Text>
                    <View style={styles.colorCont}>
                        <Image 
                            source={require('./../../assets/images/summary/shopping_cart.png')} 
                            style={styles.shopingCart} 
                        />
                    </View>
                </View>
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
    },
    searchButtonIcon: {
        width: 15,
        height: 15,
    },
    itemContainer: {
        backgroundColor: 'white',
        height: 150,
        width: 310,
        marginTop: 30,
        marginLeft: 22,
        borderRadius: 7,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 2.0,
        shadowRadius: 5,
        elevation: 8,
    },
    image1: {
        marginTop: 17,
        marginLeft: 12,
        display: 'flex',
        flexDirection: 'row',
    },
    header: {
        flexDirection: 'row',
        marginTop: -120,
        marginLeft: 185,
        fontSize: 18,
        fontWeight: 'bold',
    },
    subHeader: {
        marginLeft: 177,
        fontSize: 11,
    },
    priceAndButtonContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 180,
        marginTop: 30,
    },
    rateText: {
        paddingLeft: 1,
        fontWeight: 'bold',
        fontSize: 16,
    },
    discountRate: {
        paddingLeft: 10,
        fontWeight: 'bold',
        fontSize: 16,
        textDecorationLine: "line-through", 
    },
    colorCont: {
        backgroundColor: 'orange',
        marginLeft: 10,
        width: 30,
        height: 30,
        borderRadius: 5,
        paddingLeft: 7,
        paddingTop: 7,
        marginTop: -4,
    },
    shopingCart: {
    },
});

export default summaryItem;