// Add console.log to check to see if our code is working
console.log("working");

// Create a map object with a center and zoom level
// setView - geographical center, and zoom level
let map = L.map('mapid').setView([37.5, -122.5], 10);


// Grabbing our GeoJSON data.
L.geoJSON(sanFranAirport).addTo(map);


// We create the tile layer that will be the background of our map.
// Mapbox Styles API.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: apiKey
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);


