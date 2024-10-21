import { StyleSheet, Text, View } from 'react-native'

import Header from '../../components/Header'
import TodoListItem from '../../components/TodoListItem'
import CircleButton from '../../components/CircleButton'

const Index = () => {
    return (

        <View style={styles.container}>
            {/* <View style={styles.header}>
                <View style={styles.headerInner}>
                    <Text style={styles.headerTitle}>TODO app</Text>
                    <Text style={styles.headerRight}>LogOut</Text>
                </View>
            </View> */}
            <Header />

            {/* <View>
                <View style={styles.todoListItem}>
                    <View >
                        <Text style={styles.todoListItemTitle}>未完了のTODO-1</Text>
                        <Text style={styles.todoListItemDate}>15Oct2024 10:23</Text>
                    </View>
                    <View>
                        <Text>X</Text>
                    </View>
                </View>
            </View> */}
            <TodoListItem />

            
   
            {/* <View>
                <View style={styles.todoListItem}>
                    <View >
                        <Text style={styles.todoListItemTitle}>未完了のTODO-2</Text>
                        <Text style={styles.todoListItemDate}>15Oct2024 10:23</Text>
                    </View>
                    <View>
                        <Text>X</Text>
                    </View>
                </View>
            </View> */}
            <TodoListItem />
   
            
                {/* <View style={styles.todoListItem}>
                    <View >
                        <Text style={styles.todoListItemTitle}>未完了のTODO-3</Text>
                        <Text style={styles.todoListItemDate}>15Oct2024 10:23</Text>
                    </View>
                    <View>
                        <Text>X</Text>
                    </View>
                </View> */}
            <TodoListItem />
           
        
            {/* <View style = {styles.circleButton}>
                <Text style = {styles.circleButtonLabel}>+</Text>
            </View> */}
            {/* 1st <CircleButton /> */}
            <CircleButton>@</CircleButton>
    
                    
        </View>

    )
}

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
        // backgroundColor: 'pink'
    },
    header: {
        backgroundColor: '#79a8a9',
        //backgroundColor: 'pink',
        height:104,
        justifyContent: 'flex-end'
    },
    headerInner: {
        alignItems: 'center',
    },
    headerRight: {
        position: 'absolute',
        right: 16,
        bottom: 16,
        color: 'rgba(255, 255, 255, 0.8)'
    },
    headerTitle: {
        fontSize: 24,
        marginBottom: 8,
        lineHeight: 32,
        fontWeight: 'bold',
        color: '#ffffff'
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

export default Index