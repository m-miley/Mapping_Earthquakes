// Add console.log to check to see if our code is working
console.log("working");

// Create a map object with a center and zoom level
// setView - geographical center, and zoom level
let map = L.map('mapid').setView([37.6213, -100.3790], 5);

// Coordinates for each point to be used in the polyline.
let line = [
    [33.9416, -118.4085],
    [39.8561, -104.6737],
    [30.1975, -97.6664],
    [43.6777, -79.6248],
    [40.6413, -73.7781]
  ];

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
    color: "blue",
    weight: 4,
    dashArray: 8,
    opacity: 0.5

}).addTo(map);


// We create the tile layer that will be the background of our map.
// Mapbox Styles API.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: apiKey
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);


