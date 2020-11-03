import logo from './logo.svg';
import './App.css';

import firebase from 'firebase/app';
import firebase from 'firebase/firestore';
import firebase from 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyACj3_qrYUmqCant43AA6TLK4viDNPQ9zc",
    authDomain: "cmps3640-chatroom.firebaseapp.com",
    databaseURL: "https://cmps3640-chatroom.firebaseio.com",
    projectId: "cmps3640-chatroom",
    storageBucket: "cmps3640-chatroom.appspot.com",
    messagingSenderId: "920467976054",
    appId: "1:920467976054:web:e386f6e5197c019d01d457",
    measurementId: "G-8925SZ5EMD"
})

const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
