import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyBAOPU5anx1OkhryIakCd-wZSKdLL1NC5E',
  authDomain: 'fir-react-database.firebaseapp.com',
  databaseURL: 'https://fir-react-database.firebaseio.com',
  projectId: 'fir-react-database',
  storageBucket: 'fir-react-database.appspot.com',
  messagingSenderId: '928682291955',
  appId: '1:928682291955:web:5d52c23c55deee19b63d86',
  measurementId: 'G-ZXDDRBPED2',
}
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig)
const db = firebase.firestore(app)
firebase.analytics()

export const getData = (collection, doc) => {
  return new Promise((resolve, reject) => {
    db.collection(collection)
      .doc(doc)
      .get()
      .then((doc) => resolve({ ...doc.data() }))
      .catch((reason) => reject(reason))
  })
}

export const setData = (collection, doc, data) => {
  return new Promise((resolve, reject) => {
    db.collection(collection).doc(doc).set(data, { merge: true })
  })
}
