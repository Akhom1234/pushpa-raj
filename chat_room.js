const firebaseConfig = {
    apiKey: "AIzaSyDLwiRI1YsQKrwqtXMINoiEoQSKsSYQ4V8",
    authDomain: "class-100pro.firebaseapp.com",
    databaseURL: "https://class-100pro-default-rtdb.firebaseio.com",
    projectId: "class-100pro",
    storageBucket: "class-100pro.appspot.com",
    messagingSenderId: "1088432343201",
    appId: "1:1088432343201:web:d63e51a2b0a4f834f3c8e0"
  };
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
    room_name = document.getElementById("room_name").value;

    firebase.database().ref,("/").child(room_name).update({
          purpose : "adding room names"
    });

    localStorage.setItem("room_name", room_name);
    window.location= "kwitter_room.html"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  =childSnapshot.val() ;if (childKey !="purpose"){

  firebase_message_id=childKey;
  message_data=childData;
}
 
    //Start code
    console.log(firebase_message_id);
    console.log(message_data);
    name = message_data['name'];
    message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4> "+ name +"</h4>";
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";


row = name_with_tag + message_with_tag +like_button + like_button;       
document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();

function redirectToRoomName(){
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location= "kwitter_page.html";


}
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}



