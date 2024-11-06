import { Redirect, router } from "expo-router"
import { onAuthStateChanged } from "firebase/auth"
import { useEffect } from "react"

import { auth } from "../config"

const Index = ()=> {
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user !== null) {
                router.replace('/todo/list')
                console.log('User is signed in.')
            } else {
                console.log('User is signed out.')
            }
        })
    }, [])
    return <Redirect href="/auth/sign_up" />
    //return <Redirect href="/auth/sign_up" />
    //return <Redirect href="/todo/list" />
    //return <Redirect href="/todo/detail" />
}

export default Index
