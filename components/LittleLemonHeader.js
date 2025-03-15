import React from "react";
import {View, Text, StyleSheet} from 'react-native';


const LittleLemonHeader = (props)=>{

    return (
        <View >
            <Text style={styles.textStyle}> Submission Form </Text>
        </View>
    )

}


const styles = StyleSheet.create({
    textStyle : {
      
        paddingTop:40,
        fontSize : 25,
        color:'black',
        textAlign:'center',
        backgroundColor:'yellow'
    }
});

export default LittleLemonHeader;