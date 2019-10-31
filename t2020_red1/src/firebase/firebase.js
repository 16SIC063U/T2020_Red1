import * as firebase from "firebase";

const config = {
    apiKey: "AIzaSyAuBb-5PC1ktR3QJjvhS5knTbepoBteYOU",
    authDomain: "t2020-red1.firebaseapp.com",
    databaseURL: "https://t2020-red1.firebaseio.com",
    projectId: "t2020-red1",
    storageBucket: "t2020-red1.appspot.com",
    messagingSenderId: "983769189321",
    appId: "1:983769189321:web:821f3a14a4605b36d03618",
    measurementId: "G-EEBPDH7SJH"
 };

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export { auth, db };
