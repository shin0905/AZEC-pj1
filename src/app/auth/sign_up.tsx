import { View, Text, TextInput, StyleSheet, Alert ,TouchableOpacity} from 'react-native'
import { Link, router } from 'expo-router'
import { useState } from 'react'

import Button from '../../components/Button'
// import Header from '../../components/Header'

const handlePress = () : void => {
    // Member registration action
    // router.push('/todo/list')
    router.replace('/todo/list')
}

const SignUp = (): JSX.Element => {
    const [ email, setEmail] = useState('')
    const [ password, setPassword] = useState('')
    return (
    

        <View style={styles.container}>

            {/* <Header /> */}
            <View style={styles.inner}>
                <Text style={styles.titles}>Sign Up</Text>
                {/* <TextInput style={styles.input} value = 'Email' /> */}
                <TextInput 
                    style={styles.input} 
                    value = {email}
                    onChangeText={(text) => { setEmail(text) }}
                    autoCapitalize='none'
                    keyboardType = 'email-address'
                    placeholder='Email Address'
                    textContentType='emailAddress'
                />

                {/* <TextInput style={styles.input} value = 'Password' /> */}
                <TextInput 
                    style={styles.input} 
                    value = {password}
                    onChangeText={(text) => { setPassword(text) }}
                    autoCapitalize='none'
                    secureTextEntry
                    placeholder='Password'
                    textContentType='password'
                />

                {/* <Button label='SignUp' onPress={ () => { Alert.alert ('Pressed!') }}/> */}
                <Button label='SignUp' onPress={handlePress} />
                <View style={styles.footer}>
                    <Text style={styles.footerText}>Already registered?</Text>
                    <Link href='/auth/log_in' asChild>
                        <TouchableOpacity>
                            <Text style={styles.footerLink}>Log In</Text>
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
        // backgroundColor: '#F0F4F8'
        backgroundColor: 'pink'

    },
    header: {
        backgroundColor: '#79a8a9',
        //backgroundColor: 'pink',
        height:104,
        justifyContent: 'flex-end'
    },
    headerInner: {
        alignItems: 'center'
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

export default SignUp