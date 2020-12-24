var firebaseConfig = {
    apiKey: "AIzaSyC-kJdnrJZTJBcJTUNEbM-CfOKcQguJZY0",
    authDomain: "kwitter-e04e3.firebaseapp.com",
    databaseURL: "https://kwitter-e04e3-default-rtdb.firebaseio.com",
    projectId: "kwitter-e04e3",
    storageBucket: "kwitter-e04e3.appspot.com",
    messagingSenderId: "626023409802",
    appId: "1:626023409802:web:ad347db11b8859358ea573"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);




  function addUser(){
      user_name=document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose:"adding user"
      });
    }