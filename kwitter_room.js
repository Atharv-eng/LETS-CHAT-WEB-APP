
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyACGCCkcQPJVMTKgardvpBtAyb01pznoXk",
      authDomain: "kwitter-db-8f8db.firebaseapp.com",
      databaseURL: "https://kwitter-db-8f8db-default-rtdb.firebaseio.com",
      projectId: "kwitter-db-8f8db",
      storageBucket: "kwitter-db-8f8db.appspot.com",
      messagingSenderId: "149822570202",
      appId: "1:149822570202:web:41a5f742d2937e8f806fe3"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
     user_name=localStorage.getItem("user_name");
     document.getElementById("user_name").innerHTML="Welcome "+ user_name +"!";

     function addRoom()
     {
       room_name=document.getElementById("room_name").value;
       firebase.database().ref("/").child(room_name).update({
             purpose:"adding Room Name"
       });
       localStorage.setItem("room_name",room_name);
       window.location="kwitter_page.html";
     }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey; 
console.log("room name - "+ Room_names); 
row="<div class='room_name'id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> </hr>";
document.getElementById("output").innerHTML +=row;

      //End code
});
});

}
getData();

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}