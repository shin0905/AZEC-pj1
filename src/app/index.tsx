import { StyleSheet, Text, View } from 'react-native';

const Index = () => {
    return (

        <View style={styles.container}>
            <View>
                <View>
                    <Text>TODO app</Text>
                    <Text>LogOut</Text>
                </View>
            </View>

            <View>
                <View>
                    <Text style={styles.text}>未完了のTODO</Text>
                    <Text>15Oct2024 10:23</Text>
                </View>
            </View>
            <View>
                <View>
                    <Text>Delete</Text>
                </View>
            </View>
        
            <View>
                <View>
                    <Text>未完了のTODO</Text>
                    <Text>12Oct2024 10:23</Text>
                </View>
            </View>
            <View>
                <View>
                    <Text>Delete</Text>
                </View>
            </View>
            <View>
                    <Text>X</Text>
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: '#ffffff',
        backgroundColor: 'blue',
        fontSize: 20,
        fontWeight: 'bold',
        padding: 16
    }
})




export default Index