import firebase from 'firebase/app'
import 'firebase/firestore'
import firebaseConfig from './firebaseConfig'


var createUserApp = firebase.initializeApp(firebaseConfig, "createUserApp");

export default createUserApp.firestore()