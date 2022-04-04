
var mymap = L.map('mapid').setView([40.144852,45.298571], 9);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 16,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: "pk.eyJ1IjoieWVyYW5vc3lhbnZhaGFuIiwiYSI6ImNrcWtoaTZnZTA5NGcycHBtbjN4eTJ3YXgifQ.gFBS9HMOrCxxDZL9VEV4iw"
}).addTo(mymap);


var AUA=L.marker([40.193108970347225, 44.50448643639859]).addTo(mymap);
var Home=L.marker([40.144852,45.298571]).addTo(mymap);

var Quantum_College=L.marker([40.150358481964325, 44.486269869210915]).addTo(mymap);

AUA.bindPopup("<b>AUA</b>", {autoClose: false}).openPopup();
Quantum_College.bindPopup("<b>Quantum College</b>", {autoClose: false}).openPopup();
Home.bindPopup("<b>Home</b>", {autoClose: false}).openPopup();


console.log("LEFLET RUN")
