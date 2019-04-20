import firebase from 'firebase/app';
import 'firebase/storage';

const config = {
    apiKey: "AIzaSyC6u69YdSzYxhIvy98Y3w1CNMsDSGk4JLg",
    authDomain: "recyclopedia-a1e88.firebaseapp.com",
    databaseURL: "https://recyclopedia-a1e88.firebaseio.com",
    projectId: "recyclopedia-a1e88",
    storageBucket: "recyclopedia-a1e88.appspot.com",
    messagingSenderId: "541954102624"
};

firebase.initializeApp(config);

var storage = firebase.storage();

export {
    storage, firebase as default
};