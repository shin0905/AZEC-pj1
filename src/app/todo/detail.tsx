import { StyleSheet, Text, View } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { router } from 'expo-router'
import { useRouter } from 'expo-router'

import Header from '../../components/Header'
import CircleButton from '../../components/CircleButton'

// const handlePress = (): void => {
//     router.back()
// }

const Detail = () :JSX.Element=> {
    const router = useRouter(); // フックを使ってrouterを取得
    
    const handlePress = (): void => {
        router.back();
    };


    return (

        <View style={styles.container}>
       
            <Header />
            <View style={styles.todoHeader}>
                <Text style={styles.todoTitle}>Todo List </Text>
                <Text style={styles.todoDate}>15Oct2024 10:23</Text>

            </View>
            <View>
                <Text style={styles.todoBody}>
                    Check New Mac Mini
                    Check Magic Keyboard touch button at Apple store
                </Text>
            </View>    
            <CircleButton onPress={handlePress} style={{top: 160, bottom: 'auto'}}>
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
        paddingVertical: 32,
        paddingHorizontal: 27
    },
    todoText:{
        fontSize: 16,
        lineHeight: 24,
        color: '#000000'
    }


})

export default Detail