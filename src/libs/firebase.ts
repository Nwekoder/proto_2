import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
	apiKey: "AIzaSyAAJ9vSlxLhBLEuR738AJtJ-qtVItAWzrw",
	authDomain: "signofjoy-5375e.firebaseapp.com",
	projectId: "signofjoy-5375e",
	storageBucket: "signofjoy-5375e.appspot.com",
	messagingSenderId: "803157542658",
	appId: "1:803157542658:web:bd3b764b0f07c2b9c4e41b",
	measurementId: "G-KD7PFCTGX7",
}

const app = initializeApp(firebaseConfig)
const firestore = getFirestore(app)
const auth = getAuth(app)
const storage = getStorage(app)

const firebase = { firestore, auth, storage }
export default firebase
