var wspolrzedne = new google.maps.LatLng(53.419,14.581);
var opcjeMapy = {
    zoom: 10,
    center: wspolrzedne,
    mapTypeId: google.maps.MapTypeId.ROADMAP
};
var mapa = new
google.maps.Map(document.getElementById("mapka"),
    opcjeMapy);