import { initializeApp } from 'firebase/app'
import { initializeAuth, getReactNativePersistence } from 'firebase/auth'
import { getFirestore} from 'firebase/firestore'
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'

const firebaseConfig = {
    apiKey: "AIzaSyBGBe_F2ZrdJWuT585r0LsYPpNYmdUj0AM",
    authDomain: "todoapp-58f26.firebaseapp.com",
    projectId: "todoapp-58f26",
    storageBucket: "todoapp-58f26.firebasestorage.app",
    messagingSenderId: "224613682712",
    appId: "1:224613682712:web:2f7ab3c25930643636bd6d"
  }

  // const firebaseConfig = {
  //   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  //   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  //   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  //   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  //   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  //   appId: process.env.REACT_APP_FIREBASE_APP_ID
    
  // }


  const app = initializeApp(firebaseConfig)
  const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  })
  const db = getFirestore(app)

  export { app, auth, db }
  