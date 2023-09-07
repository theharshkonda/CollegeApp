
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
    apiKey: 'YAIzaSyB-BPHP4h1dAX-byTwgPWgci94YmFalr5w',
    authDomain: 'expo-f2d40.firebaseio.com',
    databaseURL: 'https://expo-f2d40-default-rtdb.firebaseio.com',
    projectId: 'expo-f2d40',
    storageBucket: 'expo-f2d40.appspot.com',
    messagingSenderId: '374815349583',
    appId: '1:374815349583:android:07abb5ec27bbc2d9f5833a',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);


export { db, storage };