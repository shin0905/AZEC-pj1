import {View, Text, StyleSheet} from 'react-native'

// interface Props {
//     children: string
// }
const Hello_0 = () => {

    return (
        <View>
            {/*<Text >Hello </Text>*/}
            <Text style = {styles.text}>Hello </Text>
        </View>
    )  

 }

 const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
      alignItems: 'center',
      justifyContent: 'center'
    },
    text: {
      color: '#ffffff',
      backgroundColor: 'blue',
      fontSize: 10,
      fontWeight: 'bold',
      padding: 16
    }
  })
export default Hello_0