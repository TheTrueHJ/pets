var firebaseConfig = {
    apiKey: "AIzaSyCjOU5omcu-ERvIqE2yfjk3ZL_r6uPY3w8",
    authDomain: "helping-pet-owners.firebaseapp.com",
    projectId: "helping-pet-owners",
    storageBucket: "helping-pet-owners.appspot.com",
    messagingSenderId: "584343411389",
    appId: "1:584343411389:web:64b5dc57b02ff09c73b5d4"
};

firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
console.log(firebase_message_id + message_data);
name = message_data["name"];
type = message_data["type"];
age = message_data["age"];
breed = message_data["breed"];
seen = message_data["seen"];
contact = message_data["contact"];
n = "<center><h2 id = 'text'> Name: " + name + "</h2></center> <br> ";
m = "<h4 id = 'text'> Type: " + type+ "</h4><br>";
l = "<h4 id = 'text'> Breed: "; + breed + "</h4><br>"
s = "<h4 id = 'text'> Age: "; + age + "</h4><br>"
c = "<h4 id = 'text'> Last seen: "; + seen + "</h4><br>"
o = "<h4 id = 'text'> Contact if Found: "; + contact + "</h4><br>"
w = "<div id = 'info'>" + n+m+l+s+c+o+w+ "</div>"
document.getElementById("output").innerHTML = w;
//End code
 } });  }); }
getData();

function Next() {
    window.location = "custom.html"
}