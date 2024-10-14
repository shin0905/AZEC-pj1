import { StyleSheet, Text, View } from 'react-native';

const Index = () => {
    return (

        <View>
            <View style={styles.header}>
                <View style={styles.headerInner}>
                    <Text style={styles.headerTitle}>TODO app</Text>
                    <Text style={styles.headerRight}>LogOut</Text>
                </View>
            </View>

            <View>
                <View>
                    <Text>未完了のTODO</Text>
                    <Text>15Oct2024 10:23</Text>
                </View>
            </View>
            <View>
                <View>
                    <Text>X</Text>
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
                    <Text>X</Text>
                </View>
            </View>
            <View>
                    <Text>+</Text>
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    header: {
        backgroundColor: '#79a8a9',
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
    }

})




export default Index