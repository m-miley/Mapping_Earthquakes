// Add console.log to check to see if our code is working
console.log("working");

// Create a map object with a center and zoom level
let map = L.map('mapid').setView([40.7, -94.5], 4.5);



// We create the tile layer that will be the background of our map.
// Mapbox Styles API.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: apiKey
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

// Add marker to map for LA, CA
var marker = L.marker([34.0522, -118.2437]).addTo(map);

// var marker = L.circle([34.0522, -118.2437], {
//     radius: 100
//  }).addTo(map);

// var marker = L.circleMarker([34.0522, -118.2437], {
//     radius: 300,
//     color: 'black',
//     fillColor: 'yellow',
//  }).addTo(map);

