import { View, Text, TextInput, StyleSheet, Alert } from 'react-native'

import Button from '../../components/Button'

const SignUp = (): JSX.Element => {
    return (

        <View style={styles.container}>

             <View style={styles.header}>
                <View style={styles.headerInner}>
                    <Text style={styles.headerTitle}>TODO app</Text>
                    <Text style={styles.headerRight}>LogOut</Text>
                </View>
             </View>

            <View style={styles.inner}>
                <Text style={styles.titles}>Sign Up</Text>
                <TextInput style={styles.input} value = 'Email' />
                <TextInput style={styles.input} value = 'Password' />
                {/* <View style={styles.button}>
                    <Text style={styles.buttonLabel}>Submit</Text>
                </View> */}
                {/* 1st <Button label='SignUp' /> */}
                <Button label='SignUp' onPress={ () => { Alert.alert ('Pressed!') }}/>
                <View style={styles.footer}>
                    <Text style={styles.footerText}>Already registered?</Text>
                    <Text style={styles.footerLink}>Log In</Text>
                </View>

            </View>
        </View>        
    )       
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F4F8'
        //justifyContent: 'center',
        //alignItems: 'center'
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