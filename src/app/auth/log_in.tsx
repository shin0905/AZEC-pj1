import { View, Text, TextInput, StyleSheet,Alert,TouchableOpacity} from 'react-native'
import { Link} from 'expo-router'

import Button from '../../components/Button'
import Header from '../../components/Header'

const LogIn = (): JSX.Element => {
    return (

        <View style={styles.container}>

            <Header />
            <View style={styles.inner}>
                <Text style={styles.titles}>Log In</Text>
                <TextInput style={styles.input} value = 'Email' />
                <TextInput style={styles.input} value = 'Password' />
                <Button label='SignUp' onPress={ () => { Alert.alert ('Pressed!') }}/>
                <View style={styles.footer}>
                    <Text style={styles.footerText}>Not registerd?</Text>
                    {/* <Link href='/auth/sign_up' >Sign up here!!!</Link>  */}
                    <Link href='/auth/sign_up' asChild>
                        <TouchableOpacity>
                            <Text style={styles.footerLink}>Sign up here</Text>
                        </TouchableOpacity>
                    </Link>
                </View>

            </View>
        </View>        
    )       
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F4F8',
    },
   
    inner: {
        paddingHorizontal: 24,
        paddingVertical: 27
    },

    titles: {
        fontSize: 24,
        lineHeight: 24,
        fontWeight: 'bold',
        marginBottom: 14
    },

    input: {
        borderWidth: 1,
        borderColor: '#DDDDDD',
        backgroundColor: '#ffffff',
        height: 48,
        padding: 8,
        fontSize: 16,
        marginBottom: 16

    },
    button: {
        backgroundColor: '#467FD3',
        borderRadius: 4,
        alignSelf: 'flex-start',
        marginBottom: 24
    },
    buttonLabel: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
        lineHeight: 32,
        paddingVertical: 8,
        paddingHorizontal: 24
    },
    footer: {
        flexDirection: 'row'
    },
    footerText: {
        fontSize: 14,
        lineHeight: 24,
        marginRight: 8,
        color: '#000000'
    },
    footerLink: {
        fontSize: 14,
        lineHeight: 24,
        color: '#467FD3'
    }
})

export default LogIn