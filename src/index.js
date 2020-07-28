import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import * as firebase from 'firebase'

// Your web app's Firebase configuration
var firebaseConfig = {
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
firebase.initializeApp(firebaseConfig)
firebase.analytics()

firebase
  .firestore()
  .collection('users')
  .doc('dummy')
  .get()
  .then((doc) => console.log(doc.data()))
  .catch((reason) => console.log(reason))

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
