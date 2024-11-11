import {
    View, TextInput, StyleSheet
} from 'react-native'
import { router } from 'expo-router'
import { collection, addDoc } from 'firebase/firestore'
import { db ,auth} from '../../config'

import { Feather } from '@expo/vector-icons'
import CircleButton from '../../components/CircleButton'
import KeyboardAvoidingView from '../../components/KeyboardAvoidingView'

const handlePress =  (): void => {
    if (auth.currentUser === null) { return }
    const ref = collection(db, 'users/$(auth.currentUser.uid)/todos')
    addDoc(ref, {
        
    // addDoc(collection(db, 'todos'), {
        bodyText: 'test'
    })
    .then ((docRef) => {
        console.log('Success', docRef.id)
        router.back()
    })
    .catch((error) => {
        console.error('Error adding document: ', error)
    })
}
// const addTestDoc = async () => {
//     await addDoc(collection(db, 'todos'), {
//         bodyText: 'test 2 '
//     })
//     .then ((docRef) => {
//         console.log('Success', docRef.id)
//         router.back()
//     })
//     .catch((error) => {
//         console.error('Error adding document: ', error)
//     })
// }

// addTestDoc()

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