
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyDA-XfoyKsr5z6i_nUydQcQDnLk6SqJM_U",
    authDomain: "kwitter-f3047.firebaseapp.com",
    databaseURL: "https://kwitter-f3047-default-rtdb.firebaseio.com",
    projectId: "kwitter-f3047",
    storageBucket: "kwitter-f3047.appspot.com",
    messagingSenderId: "70082412262",
    appId: "1:70082412262:web:349576955d8cee053b8527"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser(){
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding the User"
    });
  }