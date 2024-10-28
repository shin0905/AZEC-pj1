import {View, Text, StyleSheet} from 'react-native'

interface Props {
    children: string
}
const Hello_2 = (props:Props): JSX.Element => {
    const children = props.children
    // const {children} = props

    return (
        <View>
            <Text style = {styles.text}>Hello {children}</Text>
        </View>
    )  

}

const styles = StyleSheet.create({
    text: {
    color: '#ffffff',
    backgroundColor: 'navy',
    fontSize: 40,
    fontWeight: 'bold',
    padding: 16
  }
})

export default Hello_2