// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyDV7733wihgQZ66mGaMuYTut1KY-IKWgR0",
    authDomain: "leunix-sandbox-29123.firebaseapp.com",
    databaseURL: "https://leunix-sandbox-29123.firebaseio.com",
    projectId: "leunix-sandbox-29123",
    storageBucket: "leunix-sandbox-29123.appspot.com",
    messagingSenderId: "791902354240"
};
firebase.initializeApp(firebaseConfig);

var ref = firebase.database().ref("live/code/");