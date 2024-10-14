import {View, Text, StyleSheet} from 'react-native'

const Hello_1 = (props) => {

    const children = props.children

    return (
        <View>
            <Text style = {styles.text}>Hello {children}</Text>
        </View>
    )  

}

const styles = StyleSheet.create({
    text: {
    color: '#ffffff',
    backgroundColor: 'blue',
    fontSize: 40,
    fontWeight: 'bold',
    padding: 16
  }
})

export default Hello_1