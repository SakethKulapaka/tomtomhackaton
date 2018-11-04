$(document).ready(function(){
    //initializing the map
    var MAP=tomtom.L.map('map', {
        key: '1Ky0ISFMbG2D2eAPCagrJWQAQEFVN3yo'
    });

    //firebase config
    var config = {
        apiKey: "AIzaSyBVpufh1N4SFe0IMRN8o-xRMtNhJiKwKZ0",
        authDomain: "three-522b0.firebaseapp.com",
        databaseURL: "https://three-522b0.firebaseio.com",
        projectId: "three-522b0",
        storageBucket: "three-522b0.appspot.com"
    };
    firebase.initializeApp(config);    
    const dbRefObject = firebase.database().ref().child('bus1');

//dbRefObject.on('value', snap => console.log(snap.val()));
    console.log("initial position");

    dbRefObject.on("child_added", snap => {
        console.log(snap.val());
        var long = snap.val().long;
        var lat = snap.val().lat;
        MAP.setView([long,lat],10);
        tomtom.L.marker([long,lat],{
            draggable : true
        }).addTo(MAP);
        console.log(snap.val().lat);

    });
});


