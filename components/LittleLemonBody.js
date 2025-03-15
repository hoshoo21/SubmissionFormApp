import React from "react";
import {Text, View, StyleSheet} from 'react-native';

const LittleLemonBody =(props)=>{
        return (
            <View style={{ flex:1, justifyContent:'center' }}>
                <Text style={styles.textStyle}>Submission Form Body</Text>
           
            </View>
        )

}

const styles = StyleSheet.create({
    textStyle : {
        fontSize : 16,
        color:'black',
        textAlign:'center',
    }
});

export default LittleLemonBody;