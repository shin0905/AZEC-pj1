import { StyleSheet, FlatList, View } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { router, useNavigation } from 'expo-router'
import { useEffect , useState } from 'react'
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore'


import TodoListItem from '../../components/TodoListItem'
import CircleButton from '../../components/CircleButton'
import LogOutButton from '../../components/LogOutButton'
import { db, auth } from '../../config'
import { type Todo } from '../../../types/todo'

const handlePress = (): void => {
    router.push('/todo/create')
}

const List = (): JSX.Element => {
    const [todos, setTodos] = useState<Todo[]>([])
    const navigation = useNavigation()
    useEffect (()=> {
        navigation.setOptions({
            headerRight: () => { return <LogOutButton />}
        })    

    }, [])
    useEffect (() => {
        if (auth.currentUser === null) { return }
        const ref = collection(db, 'users/$(auth.currentUser.uid)/todos')
        const q = query(ref, orderBy('updatedAt', 'desc'))
        // const q = query(ref)
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const remoteTodos: Todo[] = []
            snapshot.forEach((doc) => {
                // console.log('todo', doc.id)
                // console.log('todo', doc.data())
                const {bodyText, updatedAt} = doc.data()
                remoteTodos.push({
                    id: doc.id,
                    bodyText: bodyText,
                    // updatedAt: updatedAt.toDate()
                    updatedAt: updatedAt
                })
                // setTodos(remoteTodos)
            })
            setTodos(remoteTodos)
        })
        return unsubscribe
    }, [])

    return (

        <View style={styles.container}>
            <FlatList
                data={todos}
                renderItem={({ item }) => <TodoListItem todo={item} />}  
        
            />
            {/* <View>
                {todos.map((todo) =>  <TodoListItem todo={todo} /> )}
             </View>            */}
  
            <CircleButton onPress={handlePress}>
                <Feather name='plus' size={40} color="#ffffff" />
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
    },
    circleButton:{
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: '#467FD3',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 40,
        bottom: 40,
        shadowColor: '#000000',
        shadowOffset: {width: 0, height: 8},
        shadowOpacity: 0.75,
        shadowRadius: 8,
        elevation: 8
    },
    circleButtonLabel: {
        color: '#ffffff',
        fontSize: 40,
        lineHeight: 48,
        textAlign: 'center'
    }   

})

export default List