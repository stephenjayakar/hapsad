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

var firebase = require('firebase');
var firebaseui = require('firebaseui');

var config = {
  apiKey: "AIzaSyA_-C7Ns-wMUd_JlKPCevlYr1K2J8L2_90",
  authDomain: "hapsadhapsad.firebaseapp.com",
  databaseURL: "https://hapsadhapsad.firebaseio.com",
  projectId: "hapsadhapsad",
  storageBucket: "hapsadhapsad.appspot.com",
  messagingSenderId: "143800903151"
};

firebase.initializeApp(config);

var ui = new firebaseui.auth.AuthUI(firebase.auth());

var uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function(authResult, redirectUrl) {
      return true;
    },
    uiShown: function() {
      document.getElementById('loader').style.display = 'none';
    }
  },
  signInFlow: 'popup',
  signInSuccessUrl: 'http://localhost:3000',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
};
ui.start('#firebaseui-auth-container', uiConfig);

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    user.getIdToken().then(function (accessToken) {
        document.getElementById('firebaseui-auth-container').hidden=true;
     });
   }
});

const db = firebase.database();

const insertPost = (text, score) => {
  const userId = firebase.auth().currentUser.uid;
  const name = firebase.auth().currentUser.displayName;
  const timestamp = Date.now();

  const postData = {
    userId: userId,
    name: name,
    text: text,
    score: score,
    timestamp: timestamp
  };
  const postId = db.ref().child('posts').push().key;
  let updates = {};

  updates['/posts/' + postId] = postData;
  updates['/user-posts/' + userId + '/' + postId] = postData;
  db.ref().update(updates);
}

const readUserPosts = () => {
  const userId = firebase.auth().currentUser.uid;
  const ref = db.ref('/user-posts/' + userId).orderByChild('timestamp');
  return ref.once('value').then(function(snapshot) {
    let posts = [];
      snapshot.forEach(function(childSnapshot) {
      posts.push(childSnapshot.val());
    });
    console.log(posts);
    return posts.reverse();
  });
}

const readAllPosts = () => {
  const ref = db.ref('/posts').orderByChild('timestamp');
  return ref.once('value').then(function(snapshot) {
    let posts = [];
    snapshot.forEach(function(childSnapshot) {
      posts.push(childSnapshot.val());
    });
    console.log(posts);
    return posts.reverse();
  });
}

export { insertPost, readUserPosts, readAllPosts }