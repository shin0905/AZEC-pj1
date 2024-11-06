import { TouchableOpacity, Text, Alert, StyleSheet } from 'react-native'
import { signOut } from 'firebase/auth'
import { auth } from '../config'
import { router } from 'expo-router'

const handlePress = () : void => {
    signOut(auth)
    .then(() => {
        router.replace('/auth/log_in')
    })
    .catch((error) => {
        Alert.alert('ログアウトに失敗しました', error.message)
    })
}

const LogOutButton = () : JSX.Element => {
    return(
        <TouchableOpacity onPress={handlePress}>
            <Text style={styles.text}>LogOut</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        lineHeight: 24,
        color: '#ffffff'
        // color: 'rgba(255,255,255,0.7'
    }
})

export default LogOutButton