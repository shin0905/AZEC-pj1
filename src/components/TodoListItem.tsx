import { View, Text, StyleSheet } from 'react-native'

const TodoListItem = () :JSX.Element=> {

    return (
        <View>
            <View style={styles.todoListItem}>
                <View >
                    <Text style={styles.todoListItemTitle}>未完了のTODO</Text>
                    <Text style={styles.todoListItemDate}>15Oct2024 10:23</Text>
                </View>
                <View>
                    <Text>X</Text>
                </View>
            </View>
        </View>

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
