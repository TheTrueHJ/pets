var firebaseConfig = {
    apiKey: "AIzaSyCjOU5omcu-ERvIqE2yfjk3ZL_r6uPY3w8",
    authDomain: "helping-pet-owners.firebaseapp.com",
    projectId: "helping-pet-owners",
    storageBucket: "helping-pet-owners.appspot.com",
    messagingSenderId: "584343411389",
    appId: "1:584343411389:web:64b5dc57b02ff09c73b5d4"
};

firebase.initializeApp(firebaseConfig);

name= document.getElementById("name").value;
type = document.getElementById("type").value;
age = document.getElementById("age").value;
breed = document.getElementById("breed").value;
seen = document.getElementById("seen").value;
contact = document.getElementById("contact").value;

function display(){
    firebase.database().ref("pets").push({
        name: name,
        type: type,
        age: age,
        breed: breed,
        seen: seen,
        contact: contact
    });
    window.location = "pet.html"
}
