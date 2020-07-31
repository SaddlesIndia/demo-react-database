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
  // let dummy
  return new Promise((resolve, reject) => {
    db.collection(collection)
      .doc(doc)
      .get()
      .then((doc) => {
        // dummy = { ...doc.data() }
        // setReadCount('users', 'dummy', dummy.count)
        resolve({ ...doc.data() })
      })
      .catch((reason) => reject(reason))
  })
}

export const setData = (collection, doc, data) => {
  return new Promise((resolve, reject) => {
    db.collection(collection)
      .doc(doc)
      .set(data, { merge: true })
      .then(() => {
        resolve(true)
      })
  })
}

export const signUp = (email, password) => {
  return new Promise((resolve, reject) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => resolve(result.user.uid))
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code
        var errorMessage = error.message
        // ...

        reject(errorCode, errorMessage)
      })
  })
}

// export const setReadCount = (collection, doc, data) => {
//   return new Promise((resolve, reject) => {
//     db.collection(collection)
//       .doc(doc)
//       .set({ count: data + 1 }, { merge: true })
//       .then(() => {
//         resolve()
//       })
//   })
// }

export const signIn = (email, password) => {
  return new Promise((resolve, reject) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((result) => resolve(result.user.uid))
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code
        var errorMessage = error.message
        // ...

        reject(errorCode, errorMessage)
      })
  })
}
