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
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      console.log("allahuakbar")
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

// var provider = new firebase.auth.GoogleAuthProvider();
/*
if (!firebase.auth().currentUser) {
  firebase.auth().signInWithPopup(provider).then(function(result) {
    var token = result.credential.accessToken;
    var user = result.user;
    console.log(user);
  }).catch(function(error) {
    console.log("This should not have happened");
    console.log(error.email);
  });
}
*/

const db = firebase.database();

const insertPost = (text, score) => {
  const userId = firebase.auth().currentUser.uid;
  const timestamp = Date.now();

  const postData = {
    userId: userId,
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
    return posts;
  });
}

const readAllPosts = () => {
  const userId = firebase.auth().currentUser.uid;
  const ref = db.ref('/posts').orderByChild('timestamp');
  return ref.once('value').then(function(snapshot) {
    let posts = [];
    snapshot.forEach(function(childSnapshot) {
      posts.push(childSnapshot.val());
    });
    console.log(posts);
    return posts;
  });
}

console.log(firebase.auth().currentUser ? firebase.auth().currentUser.uid : 'no user');

// nuke();
// insertPost("I am sad", 1);
// insertPost("I am happy", 3);
// insertPost("dave", "I am sadder", 0);
// readAllPosts();
// readUserPosts("wince");

export { insertPost, readUserPosts, readAllPosts }