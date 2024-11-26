import {
    View, TextInput, StyleSheet
} from 'react-native'
import { router, useLocalSearchParams } from 'expo-router'
// import { collection, addDoc, Timestamp } from 'firebase/firestore'
import { db ,auth} from '../../config'
import { useState, useEffect } from 'react'
import { doc, getDoc, setDoc, Timestamp } from 'firebase/firestore'

import { Feather } from '@expo/vector-icons'
import CircleButton from '../../components/CircleButton'
// import { type Todo } from '../../../types/todo'

import KeyboardAvoidingView from '../../components/KeyboardAvoidingView'

const handlePress =  (id:string, bodyText: string): void => {
    if (auth.currentUser === null) { return }
    const ref = doc (db, `users/$(auth.currentUser.uid)/todos`, id)
    setDoc(ref, {
        bodyText: bodyText,
        updatedAt: Timestamp.fromDate(new Date())
    })
    .then (() => {
        router.back()
    })
    .catch((error) => {
        console.log('Error editing document: ', error)
        // Alert.alert('Error editing document', error.message)
    })
}

const Edit = (): JSX.Element => {
    const id = String(useLocalSearchParams().id)
    const [bodyText, setBodyText] = useState('')
    useEffect (() => {
        if (auth.currentUser === null) { return }
        const ref = doc(db, 'users/$(auth.currentUser.uid)/todos', id)
        getDoc(ref)
          .then ((docRef) => {
              console.log('Success', docRef.data())
              const RemoteBodyText = docRef?.data().bodyText
              setBodyText(RemoteBodyText)
            })
          .catch((error) => {
              console.error('Error editing document: ', error)
            })
        }, [])
        console.log('id@edit_useEffect', id)
    return (
        <KeyboardAvoidingView style={styles.container} >

            <View style={styles.inputContainer}>
                <TextInput
                 multiline 
                 style={styles.input} 
                 value = {bodyText}
                 onChangeText={(text) => { setBodyText(text) }}
                 autoFocus
                 />
            </View>

            <CircleButton onPress={() => { handlePress(id, bodyText)}}>
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
        // paddingHorizontal: 27,
        // paddingVertical: 32
    },
    input: {
        flex: 1,
        fontSize: 16,
        lineHeight: 24,
        textAlignVertical: 'top',
        paddingHorizontal: 27,
        paddingVertical: 32
    }
})

export default Edit