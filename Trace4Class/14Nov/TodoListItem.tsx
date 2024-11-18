import { View, Text, StyleSheet,TouchableOpacity} from 'react-native'
import {Link} from 'expo-router'
import { type Todo} from '../../types/todo'

interface Props {
    todo: Todo
}

const TodoListItem = (props: Props) :JSX.Element=> {
    const { todo } = props
    
    const { bodyText, updatedAt } = todo
    
    // console.log(todo.bodyText)
    // console.log(todo.udatedAt)
    if (todo.updatedAt === null) {
        return <></>
    }
    // const dateString = updatedAt.toDate().toLocaleString('ja-JP')
    // updatedAtがnullまたはundefinedでないか確認し、型がDateまたはTimestamp型か確認
    const dateString =
    updatedAt && typeof updatedAt.toDate === 'function'
    ? updatedAt.toDate().toLocaleString('ja-JP')
    : '日付不明';

    return (
        <Link href='/todo/detail' asChild>
       
            <TouchableOpacity style={styles.todoListItem}>
                <View >
                
                    {/* <Text style={styles.todoListItemTitle}>未完了のTODO</Text>
                    <Text style={styles.todoListItemDate}>15Oct2024 10:23</Text> */}
                   
                    <Text style={styles.todoListItemTitle}>{bodyText}</Text>
                    {/* <Text style={styles.todoListItemDate}>{todo.updatedAt}</Text> */}
                    <Text style={styles.todoListItemDate}>{dateString}</Text>
                </View>
                <TouchableOpacity>
                    <Text>X</Text>
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
