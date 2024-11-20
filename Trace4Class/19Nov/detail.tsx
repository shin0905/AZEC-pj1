import { StyleSheet, Text, View } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { router , useLocalSearchParams } from 'expo-router'
import { onSnapshot, doc } from 'firebase/firestore'
import { useEffect , useState } from 'react'

import CircleButton from '../../components/CircleButton'
import { db, auth } from '../../config'
import { type Todo } from '../../../types/todo'
import { ScrollView } from 'react-native-gesture-handler'

const handlePress = (): void => {
    router.back()
}

const Detail = () :JSX.Element=> {

    const { id } = useLocalSearchParams()
    console.log('id', id)
    const [todo, setTodo] = useState<Todo | null>(null)
    useEffect (() => {
        if (auth.currentUser === null) { return }
        const ref = doc(db, 'users/$(auth.currentUser.uid)/todos', String(id))
        const unsubscribe = onSnapshot(ref, (todoDoc) => {
            
            console.log(todoDoc.data())
            const {bodyText, updatedAt} = todoDoc.data() as Todo
            setTodo({
                id: todoDoc.id,
                bodyText: bodyText,
                updatedAt: updatedAt
            })
        })
        return unsubscribe
    }, [])

    return (

        <View style={styles.container}>
            <View style={styles.todoHeader}>
                <Text style={styles.todoTitle}>{todo?.bodyText}</Text>
                {/* <Text style={styles.todoDate}>{todo?.updatedAt.toDate().toLocaleString('ja-JP')}</Text> */}
                <Text style={styles.todoDate}>{todo?.updatedAt.toDate().toLocaleString('ja-JP')}</Text>

            </View>
            <View>
                <Text style={styles.todoBody}>
                    {todo?.bodyText}
                </Text>
            {/* <ScrollView style={styles.todoBody}>
                <Text style={styles.todoBody}>
                    {todo?.bodyText}
                </Text>
            </ScrollView> */}
            </View>    
            <CircleButton onPress={handlePress} style={{top: 60, bottom: 'auto'}}>
                <Feather name='edit-2' size={40} color="#ffffff" />
            </CircleButton>
                    
        </View>

    )
}

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
        // backgroundColor: 'pink'
    },
    todoHeader: {
        backgroundColor: '#467FD3',
        height: 96,
        justifyContent: 'center',
        paddingVertical: 24,
        paddingHorizontal: 19

    },
    todoTitle:{
        color: '#ffffff',
        fontSize: 20,
        lineHeight: 32,
        fontWeight: 'bold'
    },
    todoDate:{
        color: '#ffffff',
        fontSize: 12,
        lineHeight: 16
    },
    todoBody:{   
        paddingHorizontal: 27
    },
    todoText:{
        paddingVertical: 32,
        fontSize: 16,
        lineHeight: 24,
        color: '#000000'
    }


})

export default Detail