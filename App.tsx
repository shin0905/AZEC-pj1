import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Hello from  './src/components/Hello'

const App = () : JSX.Element => {
  return (
    <View style={styles.container}>
      <Hello /> 
      <Text style= {styles.text}>
         Open up App.tsx to start working on your app!!!
      </Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#ffffff',
    backgroundColor: 'blue',
    fontSize: 40,
    fontWeight: 'bold',
    padding: 16
  }
});
