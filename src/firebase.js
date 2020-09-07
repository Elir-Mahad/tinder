// Here we are bringing firebase in, and connecting it to our front-end amazon app

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyAQMFiHMH04iUNyfsdSdQ8x7L_eJlwq6r8",
	authDomain: "tinder-f28c5.firebaseapp.com",
	databaseURL: "https://tinder-f28c5.firebaseio.com",
	projectId: "tinder-f28c5",
	storageBucket: "tinder-f28c5.appspot.com",
	messagingSenderId: "183124624378",
	appId: "1:183124624378:web:98b8b5ecfe9d92412fda43",
	measurementId: "G-1JT7NZ0QG6"
});

const database = firebaseApp.firestore();

export { database };
