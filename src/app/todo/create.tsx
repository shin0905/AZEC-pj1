import {
    View, TextInput, StyleSheet
} from 'react-native'
import { router } from 'expo-router'
import { Feather } from '@expo/vector-icons'
import CircleButton from '../../components/CircleButton'
import KeyboardAvoidingView from '../../components/KeyboardAvoidingView'

const handlePress = (): void => {
    router.push('/todo/list')
}

const Create = (): JSX.Element => {
    return (
        <KeyboardAvoidingView style={styles.container} >

            <View style={styles.inputContainer}>
                <TextInput
                 multiline 
                 style={styles.input} 
                 value='' 
                 />
            </View>
            <CircleButton onPress={handlePress}>
                <Feather name='plus' size={40} color="#ffffff" />
            </CircleButton>
 
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    inputContainer: {
        flex: 1,
        paddingHorizontal: 27,
        paddingVertical: 32
    },
    input: {
        flex: 1,
        fontSize: 16,
        lineHeight: 24,
        textAlignVertical: 'top'
    }
})

export default Create