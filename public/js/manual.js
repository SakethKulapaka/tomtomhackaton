$(document).ready(function(){
    console.log("LOADED");
    var long=17.3850,lat=78.4867;    
    

    MAP.setView([long,lat],14);

    console.log( long + lat);
    console.log("second");
    
    $("#submit").click( () => {
    var long = $("#long").val();
    var lat = $("#lat").val();
    var zoom = $("#zoom").val();
    MAP.setView([long,lat],zoom);
    console.log("clicked")
    });

    tomtom.L.marker([long,lat]).addTo(MAP);
});
