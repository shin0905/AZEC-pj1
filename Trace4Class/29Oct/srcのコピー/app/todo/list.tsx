import { StyleSheet, Text, View } from 'react-native'
import { Feather } from '@expo/vector-icons'

import Header from '../../components/Header'
import TodoListItem from '../../components/TodoListItem'
import CircleButton from '../../components/CircleButton'

const Index = () => {
    return (

        <View style={styles.container}>
       
            <Header />
            <TodoListItem />
            <TodoListItem />
            <TodoListItem />
            
            <CircleButton >
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

export default Index