import { View, Text, StyleSheet,TouchableOpacity, Alert} from 'react-native'
import {Link} from 'expo-router'
import { deleteDoc, doc } from 'firebase/firestore'

import { Feather } from '@expo/vector-icons'
import { type Todo} from '../../types/todo'
import { auth, db } from '../config'

interface Props {
    todo: Todo
}

const handlePress = (id: string): void => {
    // console.log('id@TodoListItem', id)
    if (auth.currentUser === null) { 
        console.log('failed to login')
        return }

    const ref = doc(db, 'users/$(auth.currentUser.uid)/todos', id)
    // const ref = doc(db, 'users/OGqyEfPLFSOd1g5koH2qSkntzjT2/todos', id)
    Alert.alert('Delete', 'Are you sure you want to delete this item?', [
        {
            text: 'Cancel',
            style: 'cancel'
        },
        {
            text: 'OK',
            style: 'destructive',
            onPress: () => {
                deleteDoc(ref)
                .then(() => {
                    console.log('Document successfully deleted!')
                })
                .catch((error) => {
                    console.error('Error removing document: ', error)
                    Alert.alert('Error removing document', error.message) 
                })
            }
        }
    ])
}
const TodoListItem = (props: Props) :JSX.Element=> {
    const { todo } = props    
    const { bodyText, updatedAt } = todo

    if (bodyText === null || updatedAt === null ) { return <></> }
    // const dateString = updatedAt.toDate().toLocaleString('ja-JP')
    // updatedAtがnullまたはundefinedでないか確認し、型がDateまたはTimestamp型か確認
    const dateString =
    updatedAt && typeof updatedAt.toDate === 'function'
    ? updatedAt.toDate().toLocaleString('ja-JP')
    : '日付不明';

    return (
        <Link 
            href= {{ pathname: '/todo/detail', params: { id: todo.id } }}
            asChild>
       
            <TouchableOpacity style={styles.todoListItem}>
                <View >
                    <Text numberOfLines={1} style={styles.todoListItemTitle}>{bodyText}</Text>
                    <Text style={styles.todoListItemDate}>{dateString}</Text>
                </View>
                <TouchableOpacity onPress={ () => { handlePress (todo.id) }}>
                    {/* <Text>X</Text> */}
                    <Feather name='delete' size={40} color="#000000" />
                </TouchableOpacity>
            </TouchableOpacity>
        </Link>
    )
}

const styles = StyleSheet.create({
    todoListItem: {
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 16,
        paddingHorizontal: 19,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0, 0, 0, 0.15)'

    },
    todoListItemTitle: {
        fontSize: 16,
        lineHeight: 24
    },
    todoListItemDate: {
        fontSize: 12,
        lineHeight: 18,
        color: '#000000'
    }
    
})
  
export default TodoListItem
