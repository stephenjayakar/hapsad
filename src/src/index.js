import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

var firebase = require("firebase");

var config = {
  apiKey: "AIzaSyA_-C7Ns-wMUd_JlKPCevlYr1K2J8L2_90",
  authDomain: "hapsadhapsad.firebaseapp.com",
  databaseURL: "https://hapsadhapsad.firebaseio.com",
  projectId: "hapsadhapsad",
  storageBucket: "hapsadhapsad.appspot.com",
  messagingSenderId: "143800903151"
};

firebase.initializeApp(config);

var db = firebase.firestore();

var docRef = db.collection('users').doc('alovelace');

var setAda = docRef.set({
  first: 'Ada',
  last: 'Lovelace',
  born: 1815
});

var aTuringRef = db.collection('users').doc('aturing');

var setAlan = aTuringRef.set({
  'first': 'Alan',
  'middle': 'Mathison',
  'last': 'Turing',
  'born': 1912
});

db.collection('users').get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      console.log(doc.id, '=>', doc.data());
    });
  })
  .catch((err) => {
    console.log('Error getting documents', err);
  });
