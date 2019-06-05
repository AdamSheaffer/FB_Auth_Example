import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase/app';
import 'semantic-ui-css/semantic.min.css';

const firebaseConfig = {
  apiKey: "AIzaSyBigVWV2UW_Xt-QvpV4rTonjXIyjtQDIjI",
  authDomain: "authtest-90ccb.firebaseapp.com",
  databaseURL: "https://authtest-90ccb.firebaseio.com",
  projectId: "authtest-90ccb",
  storageBucket: "authtest-90ccb.appspot.com",
  messagingSenderId: "578186542460",
  appId: "1:578186542460:web:57ccfe98ab47fe33"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
