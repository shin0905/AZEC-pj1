import { Text, TouchableOpacity, StyleSheet,  Alert } from 'react-native'

interface Props {
    label: string
    onPress?: () => void
}

const Button = (props: Props): JSX.Element => {
    const { label, onPress } = props
    // const { label } = props
    return(
        <TouchableOpacity onPress={onPress} style={styles.button}>
        {/* <TouchableOpacity onPress={ () => {Alert.alert('Pressed!') }} style={styles.button}> */}
         <Text style={styles.buttonLabel}>{label}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    button: {
        backgroundColor: '#467FD3',
        borderRadius: 4,
        alignSelf: 'flex-start',
        marginBottom: 24
    },
    buttonLabel: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
        lineHeight: 32,
        paddingVertical: 8,
        paddingHorizontal: 24
    }
})

export default Button