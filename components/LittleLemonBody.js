import React from "react";
import {Text, View, StyleSheet, ScrollView} from 'react-native';

const LittleLemonBody =(props)=>{
        return (
            <View style={styles.viewStyle}>
                <Text style={styles.textStyle}>Registration Form </Text>
               <ScrollView style={styles.scrollViewStyle}
             
                indicatorStyle ={"white"}
               >
                    <Text style ={{...styles.textStyle,...{paddingTop:100}}}>
                        Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!

                    </Text>
               </ScrollView>
            </View>
        )

}

const styles = StyleSheet.create({
    textStyle : {
        fontSize : 58,
        color : "white",
        textAlign :'center',
    },
    scrollViewStyle :{
            flex:1,
            
    },
     viewStyle :{ flex:1, 
        paddingTop:40,
        paddingLeft:20,
       


    }
});

export default LittleLemonBody;