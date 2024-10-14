import {View, Text, StyleSheet} from 'react-native'

// interface Props {
//     children: string
// }

interface Props {
    children: string
    bang: boolean
}
const Hello = (props:Props): JSX.Element => {
    // const {children} = props
    const {children, bang} = props

    return (
        <View>
            {/* <Text style = {styles.text}>Hello {children}</Text> */}
            <Text style = {styles.text}>
                Hello {children}{bang ? '!' : ''}
            </Text>
        </View>
    )  

}

const styles = StyleSheet.create({
    text: {
    color: '#ffffff',
    backgroundColor: 'purple',
    fontSize: 40,
    fontWeight: 'bold',
    padding: 16
  }
})

export default Hello
