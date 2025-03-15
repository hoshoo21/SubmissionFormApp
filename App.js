import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import LittleLemonBody from './components/LittleLemonBody';
export default function App() {
  return (
    <View style={styles.container} >
      <View style = {{flex:1}}>
         <LittleLemonHeader />
     
      </View>
      <View style = {{flex:8.5}}>
          <LittleLemonBody />
      </View>
      <View style = {{flex:.5}}>
      
      <LittleLemonFooter />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container :{
        flex: 3,
        backgroundColor: '#495E57',
  },
  container_tmp: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
