var firebaseConfig = {
    apiKey: "AIzaSyArCfZmLutAGeZOBIvjS549RGpCIS-bGVE",
    authDomain: "lets-chat-88f17.firebaseapp.com",
    databaseURL: "https://lets-chat-88f17-default-rtdb.firebaseio.com",
    projectId: "lets-chat-88f17",
    storageBucket: "lets-chat-88f17.appspot.com",
    messagingSenderId: "756566232873",
    appId: "1:756566232873:web:2f69c13bf16df999863138"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 //ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();
