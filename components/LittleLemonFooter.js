import React from "react";
import {Text,View,StyleSheet} from 'react-native';


const LittleLemonFooter =(props)=>{
    return (
        <View>
            <Text style={styles.textStyle} > All rights reserved, 2022 </Text>
        </View>
    )

}
const styles = StyleSheet.create({
    textStyle : {
        paddingTop : 12,
        fontSize : 18,
        color:'black',
        textAlign:'center',
        backgroundColor:'#F4CE14'
    }
});

export default LittleLemonFooter;