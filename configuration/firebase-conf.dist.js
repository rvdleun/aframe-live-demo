// Only change the firebaseConfig variables
var firebaseConfig = {
    apiKey: "xxxxx",
    authDomain: "xxxxx",
    databaseURL: "xxxxx",
    projectId: "xxxxx",
    storageBucket: "xxxxx",
    messagingSenderId: "xxxxx"
};

firebase.initializeApp(firebaseConfig);
var ref = firebase.database().ref("live/code/");