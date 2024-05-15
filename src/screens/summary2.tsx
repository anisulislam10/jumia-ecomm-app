import React from 'react';
import { StyleSheet, Text,View } from 'react-native';

const summary2 =()=>{
    return (
       <View style={styles.PageContainer}>
        <View style={styles.topBarContainer}>
            <View style={styles.topBar}>
                <Text style={styles.textFollowing}>
                </Text>
                <Text style={styles.textExplore}> </Text>
            </View>
            <View style={styles.searchContainer}>
                <View style={styles.searchButtonIcon}>

                </View>
            </View>
        </View>
       </View>
    );
};
const styles=StyleSheet.create({
    PageContainer:{
display:'flex'
    },
    topBarContainer:{
flexDirection:'row',
        backgroundColor:'green'
    },
    topBar:{
        backgroundColor:'blue',

    },
    textFollowing:{
        backgroundColor:'yellow'

    },
    textExplore:{backgroundColor:'brown'
},
    searchContainer:{backgroundColor:'red'
},
    searchButtonIcon:{backgroundColor:'white'
},



});
export default summary2;