import { Stack } from 'expo-router'

const Layout = (): JSX.Element => {
//     return <Slot />
    // return <Stack />
    return <Stack screenOptions={{
        headerStyle:{ 
            backgroundColor:   '#79a8a9'
        },
        headerTintColor:'#ffffff',
        headerTitle: 'TODO app',
        headerBackTitle: 'Back',
        headerTitleStyle: {
            fontSize: 22,
            fontWeight: 'bold'
        }
    }} />
}

export default Layout
